import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: Voice-to-Code Generator',
  description: '[
  {
    "title": "Voice-Powered Debugging Assistant",
    "one_liner": "Debug your code just by speaking the issues out loud.",
    "why_now": "In a world increasingly reliant on voice interfaces, debugging through voice can create a smoother developer experience.",
    "novel_mechanism": "Utilizes speech-to-text coupled with context-aware AI that understands code structure and debugging patterns.",
    "ai_stack": [
      "Claude/GPT",
      "RAG",
      "Embedding",
      "Speech"
    ],
    "edge_use_cases": [
      "Debugging on the go",
      "Remote collaboration during coding sessions"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "Voice input for error reporting",
        "Contextual suggestions for fixes",
        "Integration with popular IDEs"
      ],
      "tools": [
        "React",
        "Firebase",
        "Python for backend",
        "Web Speech API"
      ],
      "data_bootstrap": [
        "Collect user queries in IDEs",
        "Public coding forums for common errors"
      ],
      "risk": [
        "Potential misinterpretation of voice commands",
        "Dependency on user voice clarity"
      ],
      "mitigation": [
        "Implement feedback loop for accuracy",
        "Include a text option for input confirmation"
      ]
    },
    "go_to_market": {
      "hooks": [
        "Live debugging demo showcasing the tool in action",
        "Before/after comparisons of debugging time"
      ],
      "channels": [
        "GitHub",
        "X",
        "YouTube"
      ],
      "pricing": {
        "free": "Basic features with limited commands",
        "pro": "$9.99/month for advanced features",
        "business": "$49.99/month for team access"
      }
    },
    "moat": [
      "Integration into existing workflows",
      "Building a user community for continuous improvement",
      "Creating a dataset of voice-commanded debugging scenarios"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 7,
      "revenue_potential": 6,
      "defensibility": 7
    },
    "total_score": 28,
    "reasoning": "This idea focuses on a specific pain point in coding that is often overlooked by traditional tools, allowing for a unique market positioning."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}