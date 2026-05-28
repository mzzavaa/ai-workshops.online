---
title: "Concept Sprint"
description: "Turn your top AI use case into a concrete AWS architecture, with cost estimates and a funded PoC specification ready to approve."
tagline: "From prioritized idea to a buildable, costed AWS architecture"
phase: "02"
phase_label: "Workshop 02 of 03"
duration: "Half day (3–4 hours)"
participants: "Up to 8 participants"
deliverables:
  - "AWS Architecture Diagram"
  - "Service-level Cost Estimate"
  - "PoC Specification Document"
  - "Implementation Timeline"
related_use_cases:
  - title: "Intelligent Document Processing"
    url: "/use-cases/ai-document-processing/"
  - title: "Multi-Agent AI Systems"
    url: "/use-cases/ai-multi-agent-systems/"
  - title: "AI Transcription with Speaker Attribution"
    url: "/use-cases/ai-transcription-speaker-attribution/"
next_workshop:
  title: "Prototype Sprint"
  url: "/workshops/prototype/"
  desc: "Take the architecture designed here and build working, demo-ready software."
weight: 2
---

## The problem this solves

After a Discovery Sprint, you know what to build. The Concept Sprint answers the next question: how, with what, and at what cost?

The gap between "great idea" and "approved project" is almost always a technical one. Finance needs a cost estimate. Engineering needs a clear specification. Legal needs to understand what data is involved. The Concept Sprint produces all three, in one session.

## How it runs

<div class="ws-process-flow ws-process-flow--5">
  <div class="ws-process-step">
    <div class="ws-process-step-num">01</div>
    <div class="ws-process-step-title">Use Case Deep Dive</div>
    <div class="ws-process-step-duration">30 min</div>
    <div class="ws-process-step-desc">Clarify the exact input, output, and business logic for the chosen use case. Define what "done" looks like for the prototype.</div>
  </div>
  <div class="ws-process-step">
    <div class="ws-process-step-num">02</div>
    <div class="ws-process-step-title">Data Assessment</div>
    <div class="ws-process-step-duration">45 min</div>
    <div class="ws-process-step-desc">Map the actual data sources, formats, volumes, and access patterns. Identify what needs to be cleaned, transformed, or sourced before build day.</div>
  </div>
  <div class="ws-process-step">
    <div class="ws-process-step-num">03</div>
    <div class="ws-process-step-title">AWS Service Selection</div>
    <div class="ws-process-step-duration">45 min</div>
    <div class="ws-process-step-desc">Map each component of the solution to the right AWS service. Evaluate trade-offs between Bedrock, SageMaker, Comprehend, Textract, and managed vs. custom builds.</div>
  </div>
  <div class="ws-process-step">
    <div class="ws-process-step-num">04</div>
    <div class="ws-process-step-title">Architecture Design</div>
    <div class="ws-process-step-duration">60 min</div>
    <div class="ws-process-step-desc">Draw the full system: data flow, processing layers, storage, APIs, and security model. The diagram is built to be understood by non-technical stakeholders.</div>
  </div>
  <div class="ws-process-step">
    <div class="ws-process-step-num">05</div>
    <div class="ws-process-step-title">Cost Modelling</div>
    <div class="ws-process-step-duration">30 min</div>
    <div class="ws-process-step-desc">Build a realistic infrastructure cost estimate using AWS pricing. Separate prototype costs from production costs. Identify funding eligibility.</div>
  </div>
</div>

## A typical architecture output

The architecture diagram varies by use case, but this is a representative pattern for an AI document processing or extraction system — one of the most common outputs from Discovery Sprints:

<div class="ws-arch-diagram">
  <div class="ws-arch-stage">
    <div class="ws-arch-stage-label">Data Sources</div>
    <div class="ws-arch-nodes">
      <div class="ws-arch-node">Documents (PDF, Word)</div>
      <div class="ws-arch-node">Emails &amp; attachments</div>
      <div class="ws-arch-node">Enterprise systems (ERP, CRM)</div>
    </div>
  </div>
  <div class="ws-arch-arrow">→</div>
  <div class="ws-arch-stage">
    <div class="ws-arch-stage-label">Ingestion &amp; Storage</div>
    <div class="ws-arch-nodes">
      <div class="ws-arch-node--aws ws-arch-node">Amazon S3</div>
      <div class="ws-arch-node--aws ws-arch-node">AWS Lambda (trigger)</div>
    </div>
  </div>
  <div class="ws-arch-arrow">→</div>
  <div class="ws-arch-stage">
    <div class="ws-arch-stage-label">AI Processing</div>
    <div class="ws-arch-nodes">
      <div class="ws-arch-node--aws ws-arch-node">Amazon Textract</div>
      <div class="ws-arch-node--aws ws-arch-node">Amazon Bedrock (Claude)</div>
      <div class="ws-arch-node--aws ws-arch-node">AWS Lambda (orchestration)</div>
    </div>
  </div>
  <div class="ws-arch-arrow">→</div>
  <div class="ws-arch-stage">
    <div class="ws-arch-stage-label">Output &amp; Integration</div>
    <div class="ws-arch-nodes">
      <div class="ws-arch-node--output ws-arch-node">Structured JSON output</div>
      <div class="ws-arch-node--output ws-arch-node">API Gateway (REST)</div>
      <div class="ws-arch-node--output ws-arch-node">Downstream system push</div>
    </div>
  </div>
</div>

This pattern handles the ingestion, OCR or extraction layer, AI analysis with Bedrock, and integration back into downstream systems. The same structure applies to video processing, transcription pipelines, and multi-agent workflows — with different services at each layer.

## What the cost estimate covers

A Concept Sprint cost estimate breaks down into:

- **Prototype costs**: What it costs to build and run the demo for one month. Typically €200–800 for serverless, AI-heavy workloads.
- **Production costs**: What it costs at the target scale, with proper monitoring and redundancy. Typically 5–15× prototype costs.
- **Data preparation costs**: One-time engineering work to get data into the right format. This is often the largest line item and is frequently overlooked.

For projects with a credible production business case, the cost estimate feeds directly into an AWS PoC funding application, where up to €10,000 is available for qualifying projects.

## Why architecture before build matters

Building without a clear architecture is how organizations end up rebuilding. The Concept Sprint catches decisions that are cheap to change on paper and expensive to reverse in code:

- Which AI model is the right fit (not just the most familiar one)
- Where state should live (Lambda vs. Step Functions vs. database)
- What the security and access control model looks like
- Whether a managed service or a custom model is the right trade-off at this scale

The PoC specification document that comes out of this session is the brief for the Prototype Sprint. It answers every technical question before a line of code is written.
