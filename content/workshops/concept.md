---
title: "Concept Sprint"
description: "Turn your top AI use case into a concrete AWS architecture, with cost estimates and a funded PoC specification ready to approve."
tagline: "From prioritized idea to a buildable, costed AWS architecture"
phase: "02"
phase_label: "Workshop 02 of 03"
duration: "Half day (3–4 hours)"
participants: "Up to 8 participants"
page_image: "/images/shaping-server-corridor.webp"
page_image_alt: "Enterprise-scale AI infrastructure, from concept to architecture"
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
stats:
  - { value: "3–4h", label: "session length" }
  - { value: "8", label: "participants max" }
  - { value: "4", label: "deliverables" }
  - { value: "€10k", label: "PoC funding available" }
weight: 2
---

<div class="ws-tag-strip">
  <span class="ws-tag ws-tag--aws">Amazon Bedrock</span>
  <span class="ws-tag ws-tag--aws">Amazon Textract</span>
  <span class="ws-tag ws-tag--aws">Amazon S3</span>
  <span class="ws-tag ws-tag--aws">AWS Lambda</span>
  <span class="ws-tag ws-tag--aws">AWS Step Functions</span>
  <span class="ws-tag">Architecture Design</span>
  <span class="ws-tag">Cost Modelling</span>
  <span class="ws-tag">PoC Specification</span>
</div>

## The problem this solves

After a Discovery Sprint, you know what to build. The Concept Sprint answers the next question: how, with what, and at what cost?

The gap between "great idea" and "approved project" is almost always a technical one. Finance needs a cost estimate. Engineering needs a clear specification. Legal needs to understand what data is involved. The Concept Sprint produces all three, in one session.

Without a concrete architecture, the project stalls. Procurement opens a vendor evaluation. Engineering starts from scratch. Timelines slip from weeks to quarters. The Concept Sprint shortcircuits that cycle by producing a ready-to-approve technical specification before anyone writes a line of code.

## Who this is for

<div class="ws-personas">
  <div class="ws-persona-card">
    <div class="ws-persona-role">VP / Head of Engineering</div>
    <p>You've been handed an approved AI use case and need a real architecture, not a whiteboard sketch. You need a specification your team can actually build from.</p>
  </div>
  <div class="ws-persona-card">
    <div class="ws-persona-role">CTO / Solutions Architect</div>
    <p>You need to validate AWS service selection, estimate infrastructure costs, and produce a PoC spec that finance can approve before committing engineering resources.</p>
  </div>
  <div class="ws-persona-card">
    <div class="ws-persona-role">Product / Delivery Lead</div>
    <p>You own the timeline. You need a scoped prototype specification with realistic build estimates so you can set stakeholder expectations and resource a team.</p>
  </div>
</div>

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

The architecture diagram varies by use case, but this is a representative pattern for an AI document processing or extraction system, one of the most common outputs from Discovery Sprints:

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

This pattern handles the ingestion, OCR or extraction layer, AI analysis with Bedrock, and integration back into downstream systems. The same structure applies to video processing, transcription pipelines, and multi-agent workflows, with different services at each layer.

## What the cost estimate covers

A Concept Sprint cost estimate breaks down into:

- **Prototype costs**: What it costs to build and run the demo for one month. Typically €200–800 for serverless, AI-heavy workloads.
- **Production costs**: What it costs at the target scale, with proper monitoring and redundancy. Typically 5–15× prototype costs.
- **Data preparation costs**: One-time engineering work to get data into the right format. This is often the largest line item and is frequently overlooked.

For projects with a credible production business case, the cost estimate feeds directly into an AWS PoC funding application, where up to €10,000 is available for qualifying projects.

<div class="ws-midimage">
  <img src="/images/the-assets-desk.webp" alt="The deliverables: Architecture Concepts, AWS Cost Estimates, PoC Specification Document" loading="lazy" />
  <div class="ws-midimage-caption">The Concept Sprint produces four decision-ready documents, including a full AWS architecture diagram and a service-level cost estimate.</div>
</div>

## Why architecture before build matters

Building without a clear architecture is how organizations end up rebuilding. The Concept Sprint catches decisions that are cheap to change on paper and expensive to reverse in code.

<div class="ws-compare">
  <div class="ws-compare-col ws-compare-col--before">
    <div class="ws-compare-header">Building without a spec</div>
    <div class="ws-compare-item">Wrong AWS service selection → costly migration</div>
    <div class="ws-compare-item">No cost model → finance blocks approval</div>
    <div class="ws-compare-item">Unclear data flow → security review fails</div>
    <div class="ws-compare-item">Re-architecture mid-build → weeks lost</div>
    <div class="ws-compare-item">Prototype can't scale → rebuild from scratch</div>
  </div>
  <div class="ws-compare-col ws-compare-col--after">
    <div class="ws-compare-header">With a Concept Sprint spec</div>
    <div class="ws-compare-item">Service selection validated against your data patterns</div>
    <div class="ws-compare-item">Prototype + production costs modelled on day one</div>
    <div class="ws-compare-item">Security and access model defined before build</div>
    <div class="ws-compare-item">Architecture reviewed before a line of code is written</div>
    <div class="ws-compare-item">Prototype is production-path by design</div>
  </div>
</div>

<div class="ws-callout">
  <p>The PoC specification document produced in this session is the complete brief for the Prototype Sprint. Every technical question, service selection, data flow, cost model, security model, is answered before anyone writes code.</p>
</div>

## What "done" looks like

<div class="ws-outcome-grid">
  <div class="ws-outcome-card">
    <div class="ws-outcome-card-title">AWS Architecture Diagram</div>
    <p>A full system diagram: data sources, ingestion, processing layers, storage, API surface, and security model, built to be understood by both engineers and non-technical stakeholders.</p>
  </div>
  <div class="ws-outcome-card">
    <div class="ws-outcome-card-title">Service-Level Cost Estimate</div>
    <p>Prototype costs (typically €200–800/month) and production costs at target scale, broken out by service. Includes data preparation costs and AWS funding eligibility assessment.</p>
  </div>
  <div class="ws-outcome-card">
    <div class="ws-outcome-card-title">PoC Specification Document</div>
    <p>The complete brief for the Prototype Sprint: scope, data inputs, expected outputs, AWS services, build sequence, and acceptance criteria. Shareable with technical and non-technical stakeholders.</p>
  </div>
  <div class="ws-outcome-card">
    <div class="ws-outcome-card-title">Implementation Timeline</div>
    <p>Realistic estimates for prototype, hardening, integration, and production launch phases, with team size requirements at each stage. Directly inputs into internal resourcing and budget approval.</p>
  </div>
</div>

<div class="ws-quote">
  <p>"Linda brought both the strategic overview and the engineering execution. We had an architecture concept, cost estimates, and a working demo. All within 3 weeks."</p>
  <div class="ws-quote-attr">CTO, Media &amp; Broadcasting, DACH Region</div>
</div>



![Concept Sprint workflow: from prioritised use case to architecture diagram, service mapping, and cost estimate.](/images/fig-pipeline-sequence.png)

*Three hours of structured technical decisions. The output is the document that PoC funding applications get approved on.*

## Frequently asked questions

<div class="ws-faq">
  <div class="ws-faq-item">
    <div class="ws-faq-q">Do we need to complete the Discovery Sprint first?</div>
    <div class="ws-faq-a">Not necessarily. If your organization already has a clearly defined use case and data landscape, the Concept Sprint can run standalone. However, running Discovery first means the Concept Sprint starts with a validated, scored use case rather than assumptions about what to build.</div>
  </div>
  <div class="ws-faq-item">
    <div class="ws-faq-q">How accurate are the AWS cost estimates?</div>
    <div class="ws-faq-a">Estimates are based on real AWS pricing, your expected data volumes, and usage patterns identified during the session. Prototype costs are typically accurate to within 20%. Production costs carry wider uncertainty, they depend on scale, usage frequency, and integration complexity, but the model includes documented assumptions so finance can scenario-plan.</div>
  </div>
  <div class="ws-faq-item">
    <div class="ws-faq-q">Which AWS services does this cover?</div>
    <div class="ws-faq-a">The session is use-case-driven, not service-driven. Common services across past Concept Sprints include Amazon Bedrock, Textract, Transcribe, Comprehend, SageMaker, Lambda, Step Functions, S3, DynamoDB, and OpenSearch. The right set is determined by what your use case actually requires.</div>
  </div>
  <div class="ws-faq-item">
    <div class="ws-faq-q">Can the output be used to apply for AWS PoC funding?</div>
    <div class="ws-faq-a">Yes. The cost estimate and architecture specification are structured to feed directly into an AWS PoC funding application, where up to €10,000 is available for qualifying projects. Linda holds AWS Community Hero status and has direct relationships with AWS funding teams.</div>
  </div>
</div>


![Concept Sprint output: target AWS architecture rendered as a modular system with service-level cost estimates.](/images/fig-modular-architecture.png)

*The Concept Sprint produces the architecture engineering can build from and finance can fund.*

