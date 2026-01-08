import { Prompt, PromptCategory, PromptBundle } from '@/types';

// Prompt Categories
export const categories: PromptCategory[] = [
  {
    id: 'content-creation',
    name: 'Content Creation',
    slug: 'content-creation',
    description: 'Prompts for creating engaging blog posts, social media content, and marketing copy',
    icon: 'FileText',
    promptCount: 25,
  },
  {
    id: 'business-strategy',
    name: 'Business Strategy',
    slug: 'business-strategy',
    description: 'Strategic planning, business analysis, and growth prompts',
    icon: 'TrendingUp',
    promptCount: 20,
  },
  {
    id: 'coaching-consulting',
    name: 'Coaching & Consulting',
    slug: 'coaching-consulting',
    description: 'Client session frameworks, discovery calls, and coaching prompts',
    icon: 'Users',
    promptCount: 18,
  },
  {
    id: 'sales-marketing',
    name: 'Sales & Marketing',
    slug: 'sales-marketing',
    description: 'Sales scripts, email sequences, and marketing campaign prompts',
    icon: 'Target',
    promptCount: 22,
  },
  {
    id: 'productivity',
    name: 'Productivity',
    slug: 'productivity',
    description: 'Task management, planning, and workflow optimization prompts',
    icon: 'Zap',
    promptCount: 15,
  },
  {
    id: 'education-training',
    name: 'Education & Training',
    slug: 'education-training',
    description: 'Course creation, lesson planning, and educational content prompts',
    icon: 'GraduationCap',
    promptCount: 15,
  },
  {
    id: 'customer-service',
    name: 'Customer Service',
    slug: 'customer-service',
    description: 'Support responses, FAQ generation, and customer communication prompts',
    icon: 'HeadphonesIcon',
    promptCount: 10,
  },
];

// Sample Prompts
export const prompts: Prompt[] = [
  // Content Creation Category
  {
    id: 'prompt-001',
    title: 'Ultimate Blog Post Generator',
    description: 'Generate comprehensive, SEO-optimized blog posts on any topic with proper structure, headings, and engaging content.',
    content: `You are an expert content writer. Create a comprehensive blog post about [TOPIC].

Structure:
1. Compelling headline with power words
2. Hook introduction (2-3 sentences)
3. Why this matters section
4. Main content (5-7 key points with subheadings)
5. Practical tips section
6. Conclusion with CTA

Requirements:
- Use conversational tone
- Include relevant statistics or examples
- Add internal linking suggestions
- Optimize for SEO keyword: [KEYWORD]
- Target word count: [WORD_COUNT]`,
    category: categories[0],
    categoryId: 'content-creation',
    tags: ['blog', 'seo', 'content', 'writing'],
    price: 9.99,
    originalPrice: 14.99,
    isFeatured: true,
    isBundle: false,
    downloadCount: 1250,
    rating: 4.8,
    reviewCount: 89,
    previewContent: 'You are an expert content writer. Create a comprehensive blog post about [TOPIC]...',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-12-01'),
  },
  {
    id: 'prompt-002',
    title: 'Social Media Content Calendar',
    description: 'Create a full month of engaging social media content with post ideas, captions, and hashtag strategies.',
    content: `Create a 30-day social media content calendar for [BUSINESS_TYPE].

For each day, provide:
1. Platform (Instagram/Twitter/LinkedIn/Facebook)
2. Content type (carousel, reel, story, post)
3. Hook/Caption (first line that grabs attention)
4. Full post content
5. Call-to-action
6. Relevant hashtags (5-10)
7. Best posting time

Include mix of:
- Educational content (40%)
- Entertaining content (30%)
- Promotional content (20%)
- User-generated/community content (10%)

Brand voice: [BRAND_VOICE]
Target audience: [TARGET_AUDIENCE]`,
    category: categories[0],
    categoryId: 'content-creation',
    tags: ['social-media', 'calendar', 'marketing', 'instagram'],
    price: 14.99,
    originalPrice: 24.99,
    isFeatured: true,
    isBundle: false,
    downloadCount: 890,
    rating: 4.9,
    reviewCount: 67,
    previewContent: 'Create a 30-day social media content calendar for [BUSINESS_TYPE]...',
    createdAt: new Date('2024-02-10'),
    updatedAt: new Date('2024-11-15'),
  },
  {
    id: 'prompt-003',
    title: 'Email Newsletter Writer',
    description: 'Craft engaging email newsletters that build connection with your audience and drive conversions.',
    content: `Write an engaging email newsletter for [BUSINESS_NAME].

Newsletter Details:
- Subject Line (create 3 options, A/B test worthy)
- Preview Text (40-90 characters)
- Personal greeting
- Hook opening paragraph
- Main value content (2-3 key points)
- Story or case study element
- Clear CTA button text
- PS line for bonus engagement

Tone: [TONE - Casual/Professional/Playful]
Goal: [GOAL - Engagement/Sales/Education]
Topic: [TOPIC]

Ensure:
- Mobile-friendly formatting
- Scannable with bullet points
- Under 500 words
- One primary CTA`,
    category: categories[0],
    categoryId: 'content-creation',
    tags: ['email', 'newsletter', 'copywriting'],
    price: 7.99,
    isFeatured: false,
    isBundle: false,
    downloadCount: 654,
    rating: 4.7,
    reviewCount: 45,
    previewContent: 'Write an engaging email newsletter for [BUSINESS_NAME]...',
    createdAt: new Date('2024-03-05'),
    updatedAt: new Date('2024-10-20'),
  },
  // Business Strategy Category
  {
    id: 'prompt-004',
    title: 'Business Model Canvas Generator',
    description: 'Create a comprehensive Business Model Canvas analysis for any business idea or existing company.',
    content: `Generate a complete Business Model Canvas for [BUSINESS_IDEA].

Analyze and fill out each section:

1. KEY PARTNERS
- Who are the key partners?
- What resources do they provide?
- Key supplier relationships

2. KEY ACTIVITIES
- What activities does the value proposition require?
- Distribution channels?
- Customer relationships?

3. KEY RESOURCES
- Physical, intellectual, human, financial resources
- What resources does value proposition require?

4. VALUE PROPOSITIONS
- What value do you deliver?
- What problems are you solving?
- What needs are you satisfying?

5. CUSTOMER RELATIONSHIPS
- Type of relationship with each segment
- How integrated with business model?
- Cost considerations

6. CHANNELS
- How do you reach customers?
- Which channels work best?
- Channel integration strategy

7. CUSTOMER SEGMENTS
- Who are you creating value for?
- Most important customers?

8. COST STRUCTURE
- Most important costs?
- Most expensive resources?
- Most expensive activities?

9. REVENUE STREAMS
- What value will customers pay for?
- How would they prefer to pay?
- Revenue contribution breakdown

Industry: [INDUSTRY]
Stage: [STARTUP/GROWTH/MATURE]`,
    category: categories[1],
    categoryId: 'business-strategy',
    tags: ['business-model', 'strategy', 'planning', 'canvas'],
    price: 19.99,
    originalPrice: 29.99,
    isFeatured: true,
    isBundle: false,
    downloadCount: 445,
    rating: 4.9,
    reviewCount: 34,
    previewContent: 'Generate a complete Business Model Canvas for [BUSINESS_IDEA]...',
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-11-01'),
  },
  {
    id: 'prompt-005',
    title: 'Competitor Analysis Framework',
    description: 'Deep-dive competitor analysis with actionable insights and strategic recommendations.',
    content: `Conduct a comprehensive competitor analysis for [YOUR_COMPANY] against [COMPETITOR].

Analysis Framework:

1. COMPANY OVERVIEW
- Founded, headquarters, size
- Mission and vision
- Market position

2. PRODUCT/SERVICE ANALYSIS
- Core offerings
- Pricing strategy
- Unique features
- Weaknesses/gaps

3. MARKET POSITIONING
- Target audience
- Brand messaging
- Value proposition
- Market share estimate

4. MARKETING STRATEGY
- Channels used
- Content strategy
- Advertising approach
- Social media presence

5. STRENGTHS (What they do well)
6. WEAKNESSES (Where they fall short)
7. OPPORTUNITIES (Gaps you can exploit)
8. THREATS (What you should watch out for)

9. STRATEGIC RECOMMENDATIONS
- How to differentiate
- Quick wins to implement
- Long-term strategies
- Key takeaways

Industry: [INDUSTRY]
Your key differentiator: [DIFFERENTIATOR]`,
    category: categories[1],
    categoryId: 'business-strategy',
    tags: ['competitor', 'analysis', 'strategy', 'research'],
    price: 14.99,
    isFeatured: false,
    isBundle: false,
    downloadCount: 312,
    rating: 4.6,
    reviewCount: 28,
    previewContent: 'Conduct a comprehensive competitor analysis...',
    createdAt: new Date('2024-04-15'),
    updatedAt: new Date('2024-09-30'),
  },
  // Coaching & Consulting Category
  {
    id: 'prompt-006',
    title: 'Discovery Call Script Generator',
    description: 'Create powerful discovery call scripts that qualify leads and convert prospects into clients.',
    content: `Create a discovery call script for [YOUR_SERVICE].

OPENING (2 min)
- Warm welcome
- Set the agenda
- Permission-based approach

RAPPORT BUILDING (3 min)
- Background questions
- Current situation
- Connection points

PROBLEM IDENTIFICATION (10 min)
- Pain point exploration questions
- Impact questions (time, money, stress)
- Previous solution attempts
- Why now timing questions

VISION CASTING (5 min)
- Ideal outcome questions
- What success looks like
- Timeline expectations

QUALIFYING (5 min)
- Decision-making process
- Budget considerations
- Commitment level
- Obstacles/concerns

TRANSITION TO SOLUTION (3 min)
- Bridge to your offering
- High-level solution overview
- Relevant case study/result

CLOSE (2 min)
- Next steps options
- Handle objections
- Book follow-up

Service type: [SERVICE_TYPE]
Average deal size: [DEAL_SIZE]
Target client: [TARGET_CLIENT]`,
    category: categories[2],
    categoryId: 'coaching-consulting',
    tags: ['sales', 'discovery', 'coaching', 'script'],
    price: 24.99,
    originalPrice: 39.99,
    isFeatured: true,
    isBundle: false,
    downloadCount: 567,
    rating: 4.9,
    reviewCount: 52,
    previewContent: 'Create a discovery call script for [YOUR_SERVICE]...',
    createdAt: new Date('2024-02-28'),
    updatedAt: new Date('2024-11-10'),
  },
  {
    id: 'prompt-007',
    title: 'Client Onboarding Sequence',
    description: 'Welcome new clients with a professional onboarding email sequence and process documentation.',
    content: `Create a client onboarding sequence for [SERVICE_TYPE].

EMAIL 1: WELCOME (Immediately after purchase)
- Congratulations and excitement
- What happens next (timeline)
- Quick win they can expect
- How to reach you

EMAIL 2: GETTING STARTED (Day 1)
- Login/access instructions
- First action to take
- Resource links
- FAQ link

EMAIL 3: EXPECTATION SETTING (Day 2)
- How to get the most value
- Communication preferences
- Response time expectations
- Scheduling info

EMAIL 4: FIRST MILESTONE (Day 3-5)
- Check-in on progress
- Address common questions
- Share success story
- Encourage engagement

EMAIL 5: COMMUNITY WELCOME (Day 7)
- Introduce community/support
- How to connect with others
- Additional resources
- Feedback request

Also create:
- Onboarding checklist document
- Welcome video script
- FAQ document outline

Service: [SERVICE_NAME]
Delivery method: [METHOD]
Program length: [DURATION]`,
    category: categories[2],
    categoryId: 'coaching-consulting',
    tags: ['onboarding', 'email-sequence', 'client-experience'],
    price: 19.99,
    isFeatured: false,
    isBundle: false,
    downloadCount: 423,
    rating: 4.8,
    reviewCount: 38,
    previewContent: 'Create a client onboarding sequence for [SERVICE_TYPE]...',
    createdAt: new Date('2024-03-20'),
    updatedAt: new Date('2024-10-05'),
  },
  // Sales & Marketing Category
  {
    id: 'prompt-008',
    title: 'Sales Page Copy Generator',
    description: 'Create high-converting sales page copy with proven frameworks and persuasive elements.',
    content: `Write a high-converting sales page for [PRODUCT/SERVICE].

ABOVE THE FOLD:
- Power headline (speak to transformation)
- Subheadline (who it's for + outcome)
- Hero section copy
- Primary CTA

PROBLEM SECTION:
- Agitate the pain points (3-5)
- "Sound familiar?" validation
- The cost of inaction

SOLUTION INTRODUCTION:
- Bridge from problem to solution
- Introduce the product/service
- Unique mechanism explanation

BENEFITS SECTION:
- Top 5-7 benefits (not features)
- Transformation focused
- Specific outcomes

WHAT'S INCLUDED:
- Modules/components breakdown
- Value stack with prices
- Bonus items

SOCIAL PROOF:
- Testimonials (results-focused)
- Logos/credentials
- Statistics/results

OBJECTION HANDLING:
- FAQ section (5-7 questions)
- Address money/time/trust concerns
- Risk reversal

PRICING:
- Price presentation
- Payment options
- Comparison to alternative costs

FINAL CTA:
- Urgency/scarcity (if applicable)
- Summary of value
- Guarantee
- Strong closing CTA

Product: [PRODUCT_NAME]
Price: [PRICE]
Target audience: [AUDIENCE]
Main transformation: [TRANSFORMATION]`,
    category: categories[3],
    categoryId: 'sales-marketing',
    tags: ['sales-page', 'copywriting', 'conversion', 'landing-page'],
    price: 29.99,
    originalPrice: 49.99,
    isFeatured: true,
    isBundle: false,
    downloadCount: 789,
    rating: 4.9,
    reviewCount: 73,
    previewContent: 'Write a high-converting sales page for [PRODUCT/SERVICE]...',
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-11-20'),
  },
  {
    id: 'prompt-009',
    title: 'Email Sales Sequence (7-Day)',
    description: 'A complete 7-day email sequence designed to nurture leads and drive sales.',
    content: `Create a 7-day email sales sequence for [PRODUCT].

DAY 1: THE HOOK
- Compelling story or statistic
- Identify with their struggle
- Hint at the solution
- Curiosity builder

DAY 2: THE PROBLEM
- Deep dive into the problem
- Emotional connection
- Cost of not solving
- "There's a better way" transition

DAY 3: THE SOLUTION
- Introduce your solution
- How it works (simple)
- Why it's different
- Mini case study

DAY 4: SOCIAL PROOF
- Customer success stories
- Before/after scenarios
- Results and outcomes
- "If they can, you can too"

DAY 5: OBJECTION BUSTER
- Address top 3 objections
- FAQ format
- Risk reversal mention
- Build confidence

DAY 6: THE OFFER
- Full offer breakdown
- Value stack
- Bonuses
- Pricing and options
- Guarantee details

DAY 7: LAST CHANCE
- Urgency (deadline/scarcity)
- Recap of value
- Final testimonial
- Strong CTA
- PS with extra incentive

Product: [PRODUCT_NAME]
Price: [PRICE]
Main benefit: [BENEFIT]
Deadline/Scarcity: [URGENCY_ELEMENT]`,
    category: categories[3],
    categoryId: 'sales-marketing',
    tags: ['email-sequence', 'sales', 'nurture', 'automation'],
    price: 24.99,
    isFeatured: false,
    isBundle: false,
    downloadCount: 534,
    rating: 4.7,
    reviewCount: 41,
    previewContent: 'Create a 7-day email sales sequence for [PRODUCT]...',
    createdAt: new Date('2024-04-01'),
    updatedAt: new Date('2024-10-15'),
  },
  // Productivity Category
  {
    id: 'prompt-010',
    title: 'Weekly Planning System',
    description: 'A comprehensive weekly planning prompt that helps you prioritize, schedule, and execute effectively.',
    content: `Help me plan my week for maximum productivity.

REVIEW LAST WEEK:
- What went well?
- What didn't go as planned?
- Key lessons learned
- Incomplete tasks to carry over

THIS WEEK'S FOCUS:
Based on my goals: [CURRENT_GOALS]

1. TOP 3 PRIORITIES
- What are the 3 most important outcomes?
- Why do these matter most?
- What's the definition of "done"?

2. DAILY BREAKDOWN
For each day (Monday-Friday):
- Morning focus block (2-3 hours)
- Afternoon tasks
- Meetings/calls to schedule
- End-of-day shutdown routine

3. TIME BLOCKING
- Deep work sessions
- Admin/email windows
- Break times
- Buffer for unexpected

4. ENERGY MANAGEMENT
- High-energy tasks placement
- Low-energy task slots
- Recovery periods

5. POTENTIAL OBSTACLES
- What might derail me?
- Backup plans
- Who I need to communicate with

6. WEEKLY WINS
- What will make this week successful?
- How will I celebrate completion?

My role: [ROLE]
Work hours: [HOURS]
Current challenges: [CHALLENGES]`,
    category: categories[4],
    categoryId: 'productivity',
    tags: ['planning', 'productivity', 'time-management', 'weekly-review'],
    price: 9.99,
    isFeatured: true,
    isBundle: false,
    downloadCount: 876,
    rating: 4.8,
    reviewCount: 63,
    previewContent: 'Help me plan my week for maximum productivity...',
    createdAt: new Date('2024-02-15'),
    updatedAt: new Date('2024-11-05'),
  },
  // Education & Training Category
  {
    id: 'prompt-011',
    title: 'Course Outline Generator',
    description: 'Create a comprehensive online course outline with modules, lessons, and learning objectives.',
    content: `Create a comprehensive online course outline.

COURSE OVERVIEW:
Course Title: [COURSE_TITLE]
Target Student: [TARGET_STUDENT]
Transformation Promise: [TRANSFORMATION]
Course Length: [LENGTH - weeks/modules]

For each module, provide:

MODULE STRUCTURE:
1. Module Title (outcome-focused)
2. Learning Objectives (3-5 per module)
3. Lesson Breakdown:
   - Lesson title
   - Lesson format (video/text/audio)
   - Estimated length
   - Key teaching points
   - Exercise or activity
4. Module Assignment/Project
5. Resources/Downloads needed

RECOMMENDED MODULES:
- Module 1: Foundation/Mindset
- Module 2-5: Core Content
- Module 6: Implementation
- Bonus: Advanced strategies

ADDITIONAL ELEMENTS:
- Welcome video script outline
- Community guidelines
- FAQ document
- Completion certificate criteria
- Upsell opportunity points

Teaching style: [STYLE]
Existing content to incorporate: [EXISTING_CONTENT]`,
    category: categories[5],
    categoryId: 'education-training',
    tags: ['course-creation', 'curriculum', 'teaching', 'online-course'],
    price: 19.99,
    originalPrice: 34.99,
    isFeatured: true,
    isBundle: false,
    downloadCount: 445,
    rating: 4.9,
    reviewCount: 38,
    previewContent: 'Create a comprehensive online course outline...',
    createdAt: new Date('2024-03-10'),
    updatedAt: new Date('2024-10-25'),
  },
  // Customer Service Category
  {
    id: 'prompt-012',
    title: 'Customer Support Response Templates',
    description: 'Professional, empathetic customer support responses for common scenarios.',
    content: `Create customer support response templates for [BUSINESS_TYPE].

Generate responses for these scenarios:

1. ORDER/DELIVERY ISSUES
- Order status inquiry
- Delayed shipment
- Wrong item received
- Damaged product

2. REFUND/RETURN REQUESTS
- Within policy
- Outside policy (handling with care)
- Partial refund situations

3. TECHNICAL SUPPORT
- Password reset
- Login issues
- Feature not working
- How-to questions

4. BILLING ISSUES
- Unexpected charges
- Failed payments
- Subscription changes
- Invoice requests

5. COMPLAINTS
- Product not as expected
- Poor experience
- Escalation requests

6. POSITIVE INTERACTIONS
- Compliments (thank and encourage review)
- Feature requests
- Testimonial follow-up

For each template include:
- Subject line
- Opening (acknowledge + empathy)
- Body (solution + explanation)
- Closing (next steps + appreciation)
- Appropriate sign-off

Brand voice: [VOICE - Professional/Friendly/Casual]
Company name: [COMPANY_NAME]`,
    category: categories[6],
    categoryId: 'customer-service',
    tags: ['customer-service', 'templates', 'support', 'communication'],
    price: 14.99,
    isFeatured: false,
    isBundle: false,
    downloadCount: 334,
    rating: 4.7,
    reviewCount: 29,
    previewContent: 'Create customer support response templates...',
    createdAt: new Date('2024-04-20'),
    updatedAt: new Date('2024-09-15'),
  },
];

// Prompt Bundles
export const bundles: PromptBundle[] = [
  {
    id: 'bundle-001',
    title: 'Content Creator Complete Kit',
    description: 'Everything you need to create consistent, engaging content across all platforms.',
    prompts: prompts.filter((p) => p.categoryId === 'content-creation').slice(0, 3),
    price: 29.99,
    originalPrice: 47.97,
    savings: 17.98,
    isFeatured: true,
  },
  {
    id: 'bundle-002',
    title: 'Coaching Business Starter Pack',
    description: 'Launch your coaching business with client-getting scripts and systems.',
    prompts: prompts.filter((p) => p.categoryId === 'coaching-consulting'),
    price: 39.99,
    originalPrice: 64.98,
    savings: 24.99,
    isFeatured: true,
  },
  {
    id: 'bundle-003',
    title: 'Sales & Marketing Mega Bundle',
    description: 'Complete sales and marketing system with pages, emails, and strategies.',
    prompts: prompts.filter((p) => p.categoryId === 'sales-marketing'),
    price: 49.99,
    originalPrice: 79.98,
    savings: 29.99,
    isFeatured: true,
  },
  {
    id: 'bundle-004',
    title: 'Ultimate Prompt Library (125+ Prompts)',
    description: 'Get access to our entire library of 125+ professionally crafted prompts.',
    prompts: prompts,
    price: 99,
    originalPrice: 199,
    savings: 100,
    isFeatured: true,
  },
];

// Helper functions
export function getPromptById(id: string): Prompt | undefined {
  return prompts.find((p) => p.id === id);
}

export function getPromptsByCategory(categoryId: string): Prompt[] {
  return prompts.filter((p) => p.categoryId === categoryId);
}

export function getFeaturedPrompts(): Prompt[] {
  return prompts.filter((p) => p.isFeatured);
}

export function searchPrompts(query: string): Prompt[] {
  const lowerQuery = query.toLowerCase();
  return prompts.filter(
    (p) =>
      p.title.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery) ||
      p.tags.some((t) => t.toLowerCase().includes(lowerQuery))
  );
}

export function getCategoryBySlug(slug: string): PromptCategory | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getBundleById(id: string): PromptBundle | undefined {
  return bundles.find((b) => b.id === id);
}
