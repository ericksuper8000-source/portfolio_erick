🔍 Erick Pérez - Omni-Portfolio Orchestrator
A search engine within a portfolio
This project is more than just a showcase of work; it is a User Interface (UI) and User Experience (UX) experiment that leverages the iconic Google Search aesthetic to organize a professional journey of over 10 years across Tech and Art.

🎯 The Objective
The goal was to break away from the traditional "static portfolio" template. I wanted users not just to read my CV, but to interact with it in the most natural way possible: by searching. The mission is to prove that a senior developer can bridge the gap between technical precision and disruptive visual creativity.

🛠️ Tech Stack
Framework: Vue.js 3 (Composition API)

Build Tool: Vite (for ultra-fast development and bundling)

Routing: Vue Router (implementing Lazy Loading and History Mode)

Styling: Native Scoped CSS3 with a mobile-first responsive approach.

Iconography: Google Material Symbols & custom local assets.

AI Integration: Developed with the assistance of cutting-edge LLMs (Gemini 3 Flash) for boilerplate generation and route logic optimization.

🧠 Engineering & UX Decisions
1. The "Search Results" Interface
I chose the Google search results structure because it is the most familiar interface on the planet. This significantly reduces cognitive load for the user: they know where to click, what to expect from a description, and instinctively understand the hierarchy of information.

2. Performance & Navigation
Lazy Loading: Every section (About, Experience, Education) is only loaded when the user navigates to it. This keeps the initial load time under 400ms.

Favicon Architecture: I implemented a hybrid logic. For external sites like GitHub or LinkedIn, I use the Google Favicon API. For internal sections, I use local assets (.png) to ensure visual consistency even before the site is fully indexed or deployed on a custom domain.

3. The "Human" Factor (The Knowledge Card)
To the right of the search results, I implemented a "Knowledge Card." This was a strategic decision to balance professional content (left) with personal branding (right), keeping my profile picture and location visible without interrupting the reading flow.

⏱️ Development Timeline
Conceptualization & Structure: 1 day.

Core Development (Search Engine & Routing): 2 days.

UI/UX Refinement (Favicons, Pagination Alignment): 1 day.

Production Optimization: 1 day.

🤖 The Role of AI in this Project
This project was developed in collaboration with Artificial Intelligence. It wasn't just used for text; it served as a pair programming partner.

Key Takeaway: While AI is excellent for prototyping complex CSS structures, human precision remains vital for fine details, such as the exact pixel alignment of the pagination (making sure numbers sit perfectly under the "Eriiiiiick" logo) and managing dynamic route states. I learned to iterate on technical prompts to achieve clean, maintainable code.