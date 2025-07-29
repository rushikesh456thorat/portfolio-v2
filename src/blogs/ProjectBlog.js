import notrious_dash from '../assets/images/notrious_dash.webp'
import notrious_auth from '../assets/images/notrious_auth.webp'
import notrious_land from '../assets/images/notrious.png'
import notebook_auth from '../assets/images/screen1.webp'
import notebook_main from '../assets/images/screen2.webp'
import notebook_dash from '../assets/images/notebook_dash.webp'
import notrious_Flow from '../assets/images/notriousFlow.webp'
import notebook_flow from '../assets/images/notebookFlow.png'
import bookingbuddy_main from '../assets/images/bookingBuddy_main.png'
import mathparser_main from '../assets/images/mathparserm_main.png'

export const ProjectBlog = {
  notrious: {
    title: "Notrious",
    image: notrious_land,
    liveUrl: "https://notrious.rushikeshthorat.dev",
    githubUrl: "https://github.com/rushikesh456thorat/Notrious",
    description: "A smart tool that turns any product link from Shopify, Amazon, or Flipkart into a polished, ready-to-use product page for your Shopify store.",
    sections: [
      {
        title: "Overview",
        content: [
          "Notrious is a smart tool that turns any product link from Shopify, Amazon, or Flipkart into a polished, ready-to-use product page for your Shopify store.",
          "Designed for speed and simplicity, Notrious helps creators and dropshippers launch product pages instantly—no manual copy-paste or design needed."
        ]
      },
      {
        title: "Technologies",
        list: ["React", "MongoDb", "Shopify Api", "GraphQL", "Express.js"]
      },
      {
        title: "Why Notrious Exists",
        content: [
          "Creating product pages manually is a slow and repetitive task. For Shopify store owners and dropshippers, the process of copying product details, formatting text, uploading images, and adjusting the design for every single item takes up valuable time.",
          "When you're managing dozens of products, this becomes exhausting. It leads to delays, inconsistent layouts, and lost momentum—especially when speed and scale are critical to your success.",
          "Notrious was built to remove that friction and help you move faster, without compromising on quality."
        ]
      },
      {
        title: "How Notrious Helps",
        content: [
          "Notrious takes a single product link—from Shopify, Amazon and turns it into a complete, visually polished product page in seconds. It automatically pulls in titles, descriptions, images, and pricing, then formats everything into a clean, high-converting layout ready to import into your Shopify store.",
          "There's no need to write copy, edit images, or mess with page builders. With one click, your product page is ready to go saving you hours of manual work and letting you focus on what really matters: growing your business.",
          "Just drop a link, and Notrious does the rest.",
          `![Blog Post Banner](${notrious_Flow})`

        ],

      },
      {
        title: "Production-Level Features",
        content: [
          "To make Notrious usable beyond just a demo, I integrated essential production-level features.",
          "Users can sign in securely using their Google accounts, thanks to Firebase Authentication. This allows for a frictionless login experience without the need to manage passwords manually.",
          "For monetization, Notrious supports subscription-based access powered by Stripe. Once authenticated, users can choose a plan, complete payment, and instantly unlock features—fully integrated with backend subscription validation and access control.",
          "These additions ensure that Notrious is not just functional, but scalable, secure, and ready for real users."
        ],
        features: [
          {
            icon: "🔑",
            title: "Google Authentication",
            description: "Users can sign in securely using Google via Firebase Auth—no passwords, just one-click login."
          },
          {
            icon: "💳",
            title: "Stripe Integration",
            description: "Seamlessly handle payments with Stripe. Users can choose a plan and subscribe within seconds."
          },
          {
            icon: "📦",
            title: "Access Control",
            description: "Subscription status is linked with feature access—only paying users can publish pages."
          }
        ]
      },
      {
        title: "Snapshots from the Build",
        images: [
          notrious_land,
          notrious_dash,
          notrious_auth
        ]
      },
      {
        title: "Conclusion",
        content: [
          "Notrious started as a simple idea—to make product page creation effortless. Along the way, it evolved into a fully functional tool with smart automation, Shopify integration, real user authentication, and a working payment system.",
          "From turning a product link into a live page in seconds to managing users and subscriptions, Notrious is built to handle real-world needs with speed and simplicity.",
          "This project pushed me to blend UI, backend, AI, and platform APIs—all while focusing on user experience. It's more than just a tool; it's a step toward faster, smarter product building."
        ]
      }
    ]
  },
  notebook: {
    title: "NoteBook",
    image: notebook_main,
    liveUrl: "https://notebook.rushikeshthorat.dev",
    githubUrl: "https://github.com/rushikesh456thorat/notebook",
    description: "NoteBook is a secure, full-stack note-taking app built with the MERN stack (MongoDB, Express.js, React, Node.js).",
    sections: [
      {
        title: "Overview",
        content: [
          "NoteBook is a secure, full-stack note-taking app built with the MERN stack (MongoDB, Express.js, React, Node.js).",
          "It allows users to register, authenticate, and manage their personal notes with a simple and responsive interface.",
          "With a focus on real-time updates, clean UI, and authentication, it serves as a practical MERN starter project."
        ]
      },
      {
        title: "Technologies",
        list: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Bcrypt.js"]
      },
      {
        title: "Why NoteBook?",
        content: [
          "The idea behind NoteBook was to create a minimal, secure, and fully functional notes app that demonstrates core full-stack skills.",
          "Unlike apps that focus only on the frontend, NoteBook ensures secure data handling, user authentication, and backend validation.",
          "It’s a great way to understand authentication, protected routes, and secure data storage—all in one app."
        ]
      },
      {
        title: "How It Works",
        content: [
          "Users can register and log in securely using their email and password.",
          "Each user has a private dashboard where they can create, view, update, and delete notes.",
          "Authentication is powered by JWT tokens stored securely in local storage.",
          "Notes are stored in MongoDB with user ownership, ensuring only the creator can access them.",
          `![Blog Post Banner](${notebook_flow})`
        ]

      },
      {
        title: "Production-Level Features",
        content: [
          "NoteBook goes beyond basic CRUD by including secure user authentication, protected routes, and hashed passwords.",
          "It’s built to be modular and easy to extend, making it a great base for more complex apps like task managers or content tools."
        ],
        features: [
          {
            icon: "🔐",
            title: "JWT Authentication",
            description: "Users sign in using secure tokens—sessions are protected and scoped per user."
          },
          {
            icon: "🗃️",
            title: "Notes Management",
            description: "Users can create, edit, delete, and manage their notes from a clean, responsive UI."
          },
          {
            icon: "🔒",
            title: "Password Hashing",
            description: "User passwords are hashed using Bcrypt for secure storage and authentication."
          }
        ]
      },
      {
        title: "Snapshots from the Build",
        images: [
          notebook_dash,
          notebook_main,
          notebook_auth
        ]
      },
      {
        title: "Development & Challenges",
        content: [
          "Making the **rich‑text editor toolbar responsive** has been the toughest part of the build.",
          "On smaller screens, the toolbar buttons either **overflow**, wrap awkwardly, or shrink too much to remain usable.",
          "I experimented with `flex-wrap`, horizontal scrolling, and even collapsing buttons into a kebab menu. Each fix either **broke the editor styles** or created new usability trade-offs.",
          "Since the toolbar comes from a **third-party package**, custom overrides became hard to maintain and brittle.",
          "I'm still working on a cleaner solution—possibly by replacing the library or writing a **custom toolbar wrapper**.",
          "[View the open issue](https://github.com/rushikesh456thorat/notebook/issues/1)"
        ]
      },
      {
        title: "Conclusion",
        content: [
          "NoteBook started as a hands-on project to learn the MERN stack, but quickly became a reusable template for full-stack applications.",
          "From secure user authentication to clean UI and protected APIs, it showcases real-world full-stack patterns.",
          "It’s a solid foundation for future apps—easy to scale, extend, and deploy with production-ready patterns."
        ]
      }
    ]
  },
  bookingbuddy: {
    title: "Booking Buddy",
    image: bookingbuddy_main, // provide main image reference or thumbnail
    liveUrl: "#",
    githubUrl: "https://github.com/rushikesh456thorat/BookingBuddy",
    description: "Booking Buddy is an agentic AI-powered assistant that books museum and event tickets using natural language queries.",
    sections: [
      {
        title: "Overview",
        content: [
          "Booking Buddy is an **agentic AI-powered assistant** that books museum and event tickets using natural language queries.",
          "It leverages the **ChatGPT LLM** to understand user requests and autonomously plan bookings, including selecting events, managing visitor details, and generating UPI QR codes for payment.",
          "The system is **not payment-integrated**—instead, it provides a UPI QR code that users scan manually to complete transactions.",
          "Built as a proof of concept to demonstrate **autonomous task execution**, Booking Buddy uses OpenAI APIs, custom logic workflows, and dynamic data handling."
        ]
      },
      {
        title: "Technologies",
        list: [
          "React",
          "Node.js",
          "Express.js",
          "MongoDB",
          "OpenAI GPT-4",
          "QR Code Generator",
          "Tailwind CSS"
        ]
      },
      {
        title: "Why Booking Buddy?",
        content: [
          "Booking tickets—especially for museums and cultural events—can be cumbersome. Different platforms, formats, and payment portals lead to a poor user experience.",
          "Booking Buddy was born from the idea of a **conversational agent** that handles this end-to-end process with a single prompt.",
          "Instead of filling out forms, users just type: *'Book two tickets for the Egyptian Art Museum on Saturday afternoon.'*",
          "The system understands intent, finds availability, and auto-generates a booking flow with payment initiation—all without asking the user to interact with multiple pages."
        ]
      },
      {
        title: "How It Works",
        content: [
          "The core system is designed like an **agentic flow pipeline**. Here's a high-level view of how it works:",
          "",
          "```",
          "User Prompt ➝ LLM Interpretation ➝ Booking Intent ➝ Event Lookup ➝ Slot Matching ➝ Ticket Summary ➝ QR Payment Generation ➝ Confirmation",
          "```",
          "",
          "**Detailed Flow:**",
          "-**Language Understanding**: The user’s input is parsed by ChatGPT (using OpenAI API) to extract intent, date, time, venue, and ticket count.",
          "-**Ticket Planning Algorithm**: Based on extracted data, the backend queries the available event/museum database (mock or real API).",
          "-**Dynamic Summary**: A summary of the booking is prepared—event name, number of people, timing, location.",
          "-**QR Generation**: A UPI QR is generated with a fixed format including the total price, payee info, and purpose.",
          "-**Confirmation Page**: The summary and payment QR are shown to the user. Booking completes after UPI payment (manual scan)."
        ]
      },
      {
        title: "Production-Level Features",
        content: [
          "Booking Buddy combines conversational UI with backend intelligence. While it’s a prototype, it includes important production features:"
        ],
        features: [
          {
            icon: "🧠",
            title: "LLM-Powered Intent Detection",
            description: "Natural user prompts like 'Book 3 tickets for Science Fest next Sunday' are interpreted using GPT-4."
          },
          {
            icon: "📦",
            title: "Agentic Flow Planning",
            description: "After intent is extracted, each task (event search, QR creation) is executed autonomously via logic nodes."
          },
          {
            icon: "📷",
            title: "UPI QR Code Integration",
            description: "Instead of API-based payment, a QR is generated using `qrcode` npm package, keeping the system payment-neutral."
          },
          {
            icon: "🧾",
            title: "Clean Ticket Summarization",
            description: "Once booked, a compact summary card shows ticket details, date, and instructions for scanning the QR."
          }
        ]
      },
      {
        title: "Architecture Overview",
        content: [
          "```\nSystem Architecture:\n\nUser (Frontend)\n    ↓\nReact + Tailwind UI ➝ Prompt Input ➝ API Call to Express Server\n    ↓\nServer (Node + Express)\n    ↓\n1. Send prompt to OpenAI API (LLM)\n2. Extract booking parameters\n3. Fetch or simulate event availability\n4. Generate UPI QR Code\n    ↓\nFrontend displays ticket + QR to user\n```",
          "All interactions are stateless and handled over REST endpoints. The backend can later be extended to integrate with real ticketing APIs and payment gateways."
        ]
      },
      {
        title: "Development & Challenges",
        content: [
          "1. **Prompt Engineering**: Ensuring GPT responds with reliable JSON structures was tough. I had to add system-level instructions and fallback parsing.",
          "2. **Payment Security**: I intentionally skipped direct payment integration to avoid handling sensitive payment data. Instead, I built a UPI QR system that users manually scan.",
          "3. **Data Formatting**: Aligning user-friendly prompts with structured backend logic involved mapping synonyms, dates (like 'next Friday'), and time windows accurately.",
          "4. **Lack of Visual Assets**: Since this app is not visual-heavy, I skipped UI snapshots. Most logic happens under the hood in backend pipelines."
        ]
      },
      {
        title: "Conclusion",
        content: [
          "Booking Buddy represents a new way to interact with utility services—through natural language rather than forms or clicks.",
          "The power of agentic AI shines in how it chains together tasks like understanding language, managing workflows, and handling edge cases autonomously.",
          "Although it’s currently UPI-only and not payment-integrated, the architecture is scalable, and real API integrations can be plugged in easily.",
          "It’s a demonstration of how LLMs can take over domain-specific automation reliably and is a great template for future agent-driven assistants."
        ]
      }
    ]
  },
  mathparser: {
    title: "Math Parser (CLI Tool)",
    image: mathparser_main, // optional placeholder image
    liveUrl: "#", // not applicable
    githubUrl: "https://github.com/rushikesh456thorat/Math-Parser",
    description: "Math Parser is a command-line tool written in Python that parses both arithmetic and algebraic expressions.",
    sections: [
      {
        title: "Overview",
        content: [
          "Math Parser is a command-line tool written in Python that parses both **arithmetic and algebraic** expressions.",
          "It can tokenize math inputs like `2x^2 + 3x - 5` into structured tokens and build an **Abstract Syntax Tree (AST)** to represent the mathematical logic of the equation.",
          "This project was developed as a learning exercise to explore Python’s object-oriented design, regular expressions, and foundational compiler concepts like lexical analysis and parsing."
        ]
      },
      {
        title: "Technologies",
        list: [
          "Python 3",
          "Regex (`re` module)",
          "Object-Oriented Programming (OOP)",
          "Command-Line Interface (CLI)"
        ]
      },
      {
        title: "Motivation & Learning Goals",
        content: [
          "The project was built to strengthen my understanding of how compilers work internally, particularly **lexical analyzers** and **parsers**.",
          "I wanted to explore how raw math equations like `2x^2 + 3x - 5` could be broken into tokens like `[2, x, ^, 2, +, 3, x, -, 5]` and later be structured into a tree.",
          "It also gave me a chance to practice **problem-solving**, **Python OOP**, and work with **recursive parsing techniques**."
        ]
      },
      {
        title: "How It Works",
        content: [
          "The parser follows two key phases:",
          "**1. Tokenization (Lexical Analysis):**",
          "- Uses regular expressions to break input strings into tokens such as numbers, variables (`x`, `y`, etc.), operators (`+`, `-`, `^`), and parentheses.",
          "**2. AST Construction (Parsing):**",
          "- Builds an Abstract Syntax Tree from the token stream that reflects the order of operations and variable structure.",
          "- For example:",
          "```txt\nInput: 2x^2 + 3x - 5\nTokens: [2, x, ^, 2, +, 3, x, -, 5]\nAST:\n      +\n     / \\\n   ^     -\n  / \\   / \\\n 2   2  *   5\n     / \\\n    3   x\n```",
          "The parser correctly handles **implicit multiplication**, powers (`^`), and variable-based terms like `3x` and `2x^2`."
        ]
      },
      {
        title: "Challenges Faced",
        content: [
          "Handling **implicit multiplication** (like in `3x` or `2x^2`) was a tricky part—these aren’t directly separated by an operator but must be understood as multiplication.",
          "Writing a **robust regex tokenizer** that works for multi-digit numbers, variable names, operators, and powers required iteration.",
          "Parsing **nested or complex algebraic expressions** into the correct AST structure took time due to the recursive nature of such problems.",
          "Debugging invalid formats (like missing operators or unmatched parentheses) needed extra care."
        ]
      },
      {
        title: "Key Features",
        list: [
          "Supports both arithmetic and algebraic expressions.",
          "Tokenizes variables, powers, numbers, operators, and parentheses.",
          "Builds an Abstract Syntax Tree (AST) from the token stream.",
          "Written using clean, object-oriented design in Python.",
          "CLI-based interaction for direct equation input and output."
        ]
      },
      {
        title: "Takeaways",
        content: [
          "This project deepened my understanding of how expressions are parsed and represented internally in programming languages.",
          "It improved my Python coding style, regex handling, and recursive thinking.",
          "Though I stopped after core parsing and AST, it laid a strong foundation for future projects like evaluators, solvers, or mini compilers."
        ]
      },
      {
        title: "Conclusion",
        content: [
          "Math Parser is not just a parser—it's a stepping stone into compiler design and mathematical expression processing.",
          "It helped me practically understand how variables, powers, and operations are treated behind the scenes.",
          "While incomplete in terms of evaluation or solving, this CLI tool reflects a valuable learning journey in Python and parsing theory."
        ]
      }
    ]
  }


};