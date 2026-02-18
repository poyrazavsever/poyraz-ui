"use client";

import * as React from "react";
import { Mermaid } from "@/components/ui/molecules/mermaid";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";

const flowchartCode = `graph TD
    A[Start] --> B{Is it working?}
    B -->|Yes| C[Great!]
    B -->|No| D[Debug]
    D --> B
    C --> E[Ship it]`;

const sequenceCode = `sequenceDiagram
    participant U as User
    participant C as Client
    participant S as Server
    participant DB as Database

    U->>C: Click button
    C->>S: POST /api/data
    S->>DB: INSERT query
    DB-->>S: Success
    S-->>C: 200 OK
    C-->>U: Show confirmation`;

const classDiagramCode = `classDiagram
    class Button {
        +string variant
        +string size
        +boolean loading
        +render()
    }
    class Input {
        +string type
        +string placeholder
        +boolean disabled
        +onChange()
    }
    class Card {
        +ReactNode header
        +ReactNode content
        +ReactNode footer
    }
    Button --> Card : used in
    Input --> Card : used in`;

const ganttCode = `gantt
    title Project Timeline
    dateFormat  YYYY-MM-DD
    section Design
    Wireframes       :a1, 2025-01-01, 7d
    Prototyping      :a2, after a1, 5d
    section Development
    Components       :b1, after a2, 14d
    Integration      :b2, after b1, 7d
    section Testing
    QA               :c1, after b2, 5d
    Release          :milestone, after c1, 0d`;

export default function MermaidPage() {
  return (
    <ComponentPage
      name="Mermaid"
      description="Renders Mermaid diagrams with a brutalist dashed theme. Pass mermaid code as children or via the code prop."
      importCode={`import { Mermaid } from "poyraz-ui/molecules";`}
    >
      <DemoSection
        title="Flowchart"
        description="A basic flowchart with decision nodes."
        code={`<Mermaid>{\`graph TD
    A[Start] --> B{Is it working?}
    B -->|Yes| C[Great!]
    B -->|No| D[Debug]
    D --> B
    C --> E[Ship it]\`}</Mermaid>`}
      >
        <Mermaid>{flowchartCode}</Mermaid>
      </DemoSection>

      <DemoSection
        title="Sequence Diagram"
        description="Interactions between actors over time."
        code={`<Mermaid>{\`sequenceDiagram
    participant U as User
    participant C as Client
    participant S as Server
    U->>C: Click button
    C->>S: POST /api/data
    S-->>C: 200 OK
    C-->>U: Show confirmation\`}</Mermaid>`}
      >
        <Mermaid>{sequenceCode}</Mermaid>
      </DemoSection>

      <DemoSection
        title="Class Diagram"
        description="UML-style class relationships."
        code={`<Mermaid>{\`classDiagram
    class Button {
        +string variant
        +render()
    }
    class Input {
        +string type
        +onChange()
    }\`}</Mermaid>`}
      >
        <Mermaid>{classDiagramCode}</Mermaid>
      </DemoSection>

      <DemoSection
        title="Gantt Chart"
        description="Project timeline with milestones."
        code={`<Mermaid>{\`gantt
    title Project Timeline
    dateFormat YYYY-MM-DD
    section Design
    Wireframes :a1, 2025-01-01, 7d
    section Dev
    Components :b1, after a1, 14d\`}</Mermaid>`}
      >
        <Mermaid>{ganttCode}</Mermaid>
      </DemoSection>
    </ComponentPage>
  );
}
