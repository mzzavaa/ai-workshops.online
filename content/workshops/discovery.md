---
title: "Discovery Sprint"
description: "Turn a long list of AI ideas into a prioritized, fundable shortlist in a single focused session."
tagline: "Turn AI ambitions into a prioritized, funded plan"
phase: "01"
phase_label: "Workshop 01 of 03"
duration: "Half day (3–4 hours)"
participants: "Up to 12 participants"
deliverables:
  - "AI Use Case Shortlist (scored and ranked)"
  - "AI Readiness Assessment"
  - "AWS Funding Eligibility Report"
  - "Workshop Summary Document"
related_use_cases:
  - title: "How to Prioritize AI Use Cases"
    url: "/use-cases/ai-use-case-prioritization/"
  - title: "AWS AI Funding"
    url: "/use-cases/aws-ai-funding/"
  - title: "AI Readiness Assessment"
    url: "/use-cases/ai-readiness-assessment/"
next_workshop:
  title: "Concept Sprint"
  url: "/workshops/concept/"
  desc: "Turn your top-priority use case into a concrete AWS architecture with cost estimates."
weight: 1
---

## The problem this solves

Most organizations already have AI ideas. The problem is that a typical strategy session generates 30–80 candidates with no framework for deciding which ones to build. The list ends up in a slide deck. Six months later, the organization is still discussing the same ideas.

The Discovery Sprint replaces that cycle with a structured decision process. You leave with a scored shortlist, not more slides.

## How it runs

<div class="ws-process-flow ws-process-flow--5">
  <div class="ws-process-step">
    <div class="ws-process-step-num">01</div>
    <div class="ws-process-step-title">Stakeholder Briefing</div>
    <div class="ws-process-step-duration">30 min</div>
    <div class="ws-process-step-desc">Align on business objectives, constraints, and what success looks like for AI in your organization.</div>
  </div>
  <div class="ws-process-step">
    <div class="ws-process-step-num">02</div>
    <div class="ws-process-step-title">Landscape Mapping</div>
    <div class="ws-process-step-duration">45 min</div>
    <div class="ws-process-step-desc">Inventory your existing data sources, systems, and team capabilities. Identify gaps that affect AI feasibility.</div>
  </div>
  <div class="ws-process-step">
    <div class="ws-process-step-num">03</div>
    <div class="ws-process-step-title">Use Case Ideation</div>
    <div class="ws-process-step-duration">60 min</div>
    <div class="ws-process-step-desc">Structured brainstorm across business functions. We generate ideas, then immediately link each one to a data source and a measurable outcome.</div>
  </div>
  <div class="ws-process-step">
    <div class="ws-process-step-num">04</div>
    <div class="ws-process-step-title">Scoring Matrix</div>
    <div class="ws-process-step-duration">45 min</div>
    <div class="ws-process-step-desc">Each idea is scored on business value, time criticality, data readiness, and implementation effort. The framework is WSJF-based.</div>
  </div>
  <div class="ws-process-step">
    <div class="ws-process-step-num">05</div>
    <div class="ws-process-step-title">Funding Check</div>
    <div class="ws-process-step-duration">30 min</div>
    <div class="ws-process-step-desc">Assess eligibility for AWS PoC funding (up to €10k) and migration funding (up to €400k) for qualifying projects.</div>
  </div>
</div>

## The scoring framework

Every idea is evaluated on two dimensions before ranking:

**Opportunity Score (Importance vs. Satisfaction)**
High-importance problems with poor current solutions score highest. A document review process that takes 3 days and produces errors scores higher than a process that already works well.

**WSJF Priority Score**
Cost of delay divided by implementation effort. This surfaces use cases where the business impact is high, the window is time-sensitive, and the build is achievable quickly.

Data readiness is a hard filter: even a high-scoring use case is deprioritized if the required data doesn't exist, isn't accessible, or has quality problems that can't be resolved in the prototype phase.

The result is not a ranked list of preferences — it is a defensible, data-backed decision that a room full of stakeholders can commit to.

## What the output looks like

<div class="ws-arch-diagram">
  <div class="ws-arch-stage">
    <div class="ws-arch-stage-label">Inputs</div>
    <div class="ws-arch-nodes">
      <div class="ws-arch-node">Business goals</div>
      <div class="ws-arch-node">Existing processes</div>
      <div class="ws-arch-node">Data inventory</div>
      <div class="ws-arch-node">Team capability</div>
    </div>
  </div>
  <div class="ws-arch-arrow">→</div>
  <div class="ws-arch-stage">
    <div class="ws-arch-stage-label">Workshop Process</div>
    <div class="ws-arch-nodes">
      <div class="ws-arch-node--aws ws-arch-node">WSJF Scoring</div>
      <div class="ws-arch-node--aws ws-arch-node">Opportunity Matrix</div>
      <div class="ws-arch-node--aws ws-arch-node">Data Readiness Check</div>
      <div class="ws-arch-node--aws ws-arch-node">AWS Funding Criteria</div>
    </div>
  </div>
  <div class="ws-arch-arrow">→</div>
  <div class="ws-arch-stage">
    <div class="ws-arch-stage-label">Output Documents</div>
    <div class="ws-arch-nodes">
      <div class="ws-arch-node--output ws-arch-node">Tier 1: Build now (2–3 use cases)</div>
      <div class="ws-arch-node--output ws-arch-node">Tier 2: Build next (3–5 use cases)</div>
      <div class="ws-arch-node--output ws-arch-node">Funding eligibility report</div>
      <div class="ws-arch-node--output ws-arch-node">Workshop summary doc</div>
    </div>
  </div>
</div>

The Tier 1 shortlist is the input to the Concept Sprint. Each item in Tier 1 has a clear hypothesis, an identified data source, a named business owner, and a funding assessment.

## What makes this different from a strategy session

A typical AI strategy session produces a presentation. The Discovery Sprint produces a decision.

The difference is methodology. We don't just brainstorm — we score. We don't just score — we filter by data readiness. We don't just filter — we assess funding eligibility. By the end, you have a shortlist your finance team can act on and your technical team can build from.

Organizations that have run this sprint report a qualitative shift in how AI discussions feel. There is less politics and more clarity, because the decision is made on a shared framework rather than on who speaks loudest.
