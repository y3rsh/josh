#!/usr/bin/env node
/**
 * Renders the optimized v2 resume (scripts/resume-content.mjs) to
 * public/resume.pdf as a clean, single-column, ATS/LLM-friendly PDF.
 * Facts source of truth: docs/resume-source.md.
 * Run: pnpm resume:pdf
 */
import { createWriteStream } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import PDFDocument from 'pdfkit';
import { resume } from './resume-content.mjs';

const OUTPUT = join(dirname(fileURLToPath(import.meta.url)), '../public/resume.pdf');
const YEAR = new Date().getFullYear();

// Palette
const INK = '#1a2230';
const MUTED = '#5b6472';
const ACCENT = '#4f46e5';
const RULE = '#d4d8e0';

const PAGE = { size: 'LETTER', margins: { top: 54, bottom: 54, left: 56, right: 56 } };

const doc = new PDFDocument({
  ...PAGE,
  bufferPages: true,
  info: {
    Title: `${resume.name} — Resume ${YEAR}`,
    Author: resume.name,
    Subject: resume.title,
    Keywords:
      'Lead SDET, Build & Release, Platform Engineering, CI/CD, Test Automation, AI-augmented development, Python, TypeScript',
  },
});
const stream = createWriteStream(OUTPUT);
doc.pipe(stream);

const left = doc.page.margins.left;
const contentWidth = doc.page.width - doc.page.margins.left - doc.page.margins.right;
const bottomLimit = () => doc.page.height - doc.page.margins.bottom;

function ensureSpace(height) {
  if (doc.y + height > bottomLimit()) doc.addPage();
}

function sectionHeading(label) {
  ensureSpace(34);
  doc.moveDown(0.6);
  const y = doc.y;
  doc.font('Helvetica-Bold').fontSize(10.5).fillColor(ACCENT).text(label.toUpperCase(), left, y, {
    characterSpacing: 1.2,
  });
  doc
    .moveTo(left, doc.y + 2)
    .lineTo(left + contentWidth, doc.y + 2)
    .lineWidth(0.75)
    .strokeColor(RULE)
    .stroke();
  doc.moveDown(0.5);
}

function bullet(text) {
  const bulletX = left + 2;
  const textX = left + 14;
  const width = contentWidth - 14;
  const needed = doc.heightOfString(text, { width, lineGap: 1.5 }) + 3;
  ensureSpace(needed);
  const y = doc.y;
  doc.font('Helvetica').fontSize(9.5).fillColor(ACCENT).text('•', bulletX, y, { lineBreak: false });
  doc.fillColor(INK).text(text, textX, y, { width, lineGap: 1.5 });
  doc.moveDown(0.28);
}

// ---- Header ----
doc
  .font('Helvetica-Bold')
  .fontSize(24)
  .fillColor(INK)
  .text(resume.name, left, doc.page.margins.top);
doc.moveDown(0.15);
doc.font('Helvetica').fontSize(11.5).fillColor(ACCENT).text(resume.title, { lineGap: 1 });
doc.moveDown(0.35);

// Contact line: location + clickable links separated by · (kept to one line)
doc.fontSize(8.5).fillColor(MUTED);
const sep = '  ·  ';
doc.text(resume.location, left, doc.y, { continued: true });
for (const link of resume.links) {
  doc.fillColor(MUTED).text(sep, { continued: true });
  doc.fillColor(ACCENT).text(link.label, { continued: true, link: link.url, underline: false });
}
doc.text('', { continued: false });
doc.fillColor(INK);

// Header divider
doc.moveDown(0.9);
doc
  .moveTo(left, doc.y)
  .lineTo(left + contentWidth, doc.y)
  .lineWidth(1.2)
  .strokeColor(ACCENT)
  .stroke();
doc.moveDown(0.2);

// ---- Summary ----
sectionHeading('Summary');
doc
  .font('Helvetica')
  .fontSize(9.8)
  .fillColor(INK)
  .text(resume.summary, { lineGap: 2, align: 'left' });

// ---- Core Skills ----
sectionHeading('Core Skills');
for (const s of resume.skills) {
  const labelWidth = 150;
  const valueX = left + labelWidth;
  const valueWidth = contentWidth - labelWidth;
  const needed = doc.heightOfString(s.items, { width: valueWidth, lineGap: 1.5 }) + 3;
  ensureSpace(needed);
  const y = doc.y;
  doc
    .font('Helvetica-Bold')
    .fontSize(9.3)
    .fillColor(INK)
    .text(s.group, left, y, {
      width: labelWidth - 8,
    });
  doc
    .font('Helvetica')
    .fontSize(9.3)
    .fillColor(MUTED)
    .text(s.items, valueX, y, { width: valueWidth, lineGap: 1.5 });
  const endY = doc.y;
  doc.y = Math.max(y, endY);
  doc.moveDown(0.35);
}

// ---- Experience ----
sectionHeading('Experience');
for (const role of resume.experience) {
  ensureSpace(46);
  const rowY = doc.y;
  // Company (left, bold) + period (right, muted)
  doc
    .font('Helvetica-Bold')
    .fontSize(11)
    .fillColor(INK)
    .text(role.company, left, rowY, {
      width: contentWidth - 150,
      continued: false,
    });
  doc.font('Helvetica').fontSize(9).fillColor(MUTED).text(role.period, left, rowY, {
    width: contentWidth,
    align: 'right',
  });
  doc.y = Math.max(doc.y, rowY + 14);
  // Title + location
  doc
    .font('Helvetica-Oblique')
    .fontSize(9.8)
    .fillColor(INK)
    .text(role.title, left, doc.y, { width: contentWidth - 150, continued: false });
  const titleY = doc.y;
  doc
    .font('Helvetica')
    .fontSize(8.6)
    .fillColor(MUTED)
    .text(role.location, left, doc.y - doc.currentLineHeight(), {
      width: contentWidth,
      align: 'right',
    });
  doc.y = Math.max(doc.y, titleY);
  doc.moveDown(0.3);
  for (const b of role.bullets) bullet(b);
  doc.moveDown(0.3);
}

// ---- Education & Certifications ----
sectionHeading('Education & Certifications');
for (const ed of resume.education) {
  const y = doc.y;
  doc
    .font('Helvetica-Bold')
    .fontSize(9.8)
    .fillColor(INK)
    .text(`${ed.school}`, left, y, {
      width: contentWidth - 150,
      continued: false,
    });
  doc.font('Helvetica').fontSize(9).fillColor(MUTED).text(ed.period, left, y, {
    width: contentWidth,
    align: 'right',
  });
  doc.y = Math.max(doc.y, y + 12);
  doc.font('Helvetica').fontSize(9.3).fillColor(MUTED).text(ed.degree, left, doc.y);
  doc.moveDown(0.25);
}
for (const cert of resume.certifications) {
  bullet(cert);
}

// ---- Footer on every page ----
const range = doc.bufferedPageRange();
for (let i = range.start; i < range.start + range.count; i++) {
  doc.switchToPage(i);
  // Writing in the bottom-margin band would make pdfkit auto-append a blank
  // page; drop the bottom margin to 0 for the duration of the footer write.
  const savedBottom = doc.page.margins.bottom;
  doc.page.margins.bottom = 0;
  const footY = doc.page.height - 38;
  doc
    .font('Helvetica')
    .fontSize(7.5)
    .fillColor(MUTED)
    .text(
      `${resume.name} · ${resume.links[0].label} · Page ${i - range.start + 1} of ${range.count}`,
      left,
      footY,
      { width: contentWidth, align: 'center', lineBreak: false },
    );
  doc.page.margins.bottom = savedBottom;
}

doc.end();
stream.on('finish', () => {
  console.log(`Wrote resume PDF (${range.count} page${range.count === 1 ? '' : 's'}) to ${OUTPUT}`);
});
