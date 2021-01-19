export default function(state, action) {
  switch (action.type) {
    case 'HEADER_SELECTED':
      return state;
    default: {
      return [
        {
          title: 'about funding',
          faqs: [
            {
              question: "What is Gigfunding?",
              answer: "Gigfunding is the change modern fundraising needs. Using our online marketplace, you can hire or volunteer skills depending on how you want to give; with the money paid for those skills going to the causes you want it to. Leaving behind passive direct debits, chugging and sponsored effing bungee jumps. Gigfunding allows you to fundraise when you want and how you want.",
              open: false
            },
            {
              question: "Is Gigfunding free to use?",
              answer: "Yes! It is a free service with no fees for individuals or the causes we champion. As a UK registered non-profit organisation, we use a PAY-WHAT-YOU-FEEL revenue model and invite you to give a % of your payment to Gigfunding; so we can continue to keep the platform running. So, you can choose to give us anything from 0-20%. We like to practice what we preach and rely on the same method of fundraising we offer causes",
              open: false
            },
            {
              question: "How does Gigfunding make money?",
              answer: "As a UK registered non-profit organisation, we use a PAY-WHAT-YOU-FEEL revenue model and invite you to give a % of your payment for each transaction to Gigfunding; so we can continue to keep the platform running. You can choose to give us anything from 0-20%. This is an optional donation, not a fee, but we hope you can see the value in contributing to sustain the platform. Without donations, Gigfunding will not be able to continue and this is part of our philosophy of sharing the ownership of the project with YOU, the members.",
              open: false
            },
            {
              question: "How is Gigfunding funded?",
              answer: "Currently the project is completely self-funded, and run by a team of like-minded and enthusiastic volunteers. In our first year (2017) we won £15,000 of grant funding, and have gratefully received £1645 through crowdfunding since. We are in the process of applying for private investment loans, to see us through our first 3 years of startup, to self-sustainability. Check out our Investment deck if you want to know the ins and outs.",
              open: false
            },
            {
              question: "How does Gigfunding work?",
              answer: "Use our online marketplace to hire or volunteer skills through the site. The skills for hire will cost market rates, and the money is donated to the causes the hirer and volunteer choose. See How it works for more detail.",
              open: false
            },
            {
              question: "Who is Gigfunding for?",
              answer: "The platform is designed to be beneficial to all in your community, but currently under 18 year olds unfortunately cannot use the site due to liability and safeguarding considerations. We recognise that an online platform may pose challenges for certain folks, but we hope that in the spirit of Gigfunding, friends, neighbours and family members can help them to benefit from it. We plan to make Gigfunding as inclusive as possible for people with different-abilities, we want a truly vibrant community of changemakers. For more information see the Digital Inclusion question below.",
              open: false
            },
            {
              question: "How can I contact the team?",
              answer: "You can email us directly at team@gigfunding.org and we’ll get back to you as soon as possible. You can also use the live chat widget at the bottom left of your screen. We will endeavour to respond ASAP, but we’re only a small team of busy volunteers so please bare with us on response times!",
              open: false
            },
            {
              question: "When was Gigfunding founded?",
              answer: "In 2017, when our two co-founders, Pasco and Luke, were living in different continents. We have had a slow, organic and patient journey bringing this idea to reality. Dive deeper here.",
              open: false
            },
            {
              question: "What’s Gigfunding impact so far?",
              answer: "In 2018 with a part time volunteer team of three we proved the concept with our prototype, raising £2,455 for 33 different causes, through 43 gigs.",
              open: false
            },
            {
              question: "What is Gigfunding longer term vision?",
              answer: "Society is changing, fundraising must too. We want to put the fun back in fundraising, creating a community of changemakers to drive positive social change through truly worthwhile causes. Check out our ‘About’ page for a real in depth explanation of our bold vision.",
              open: false
            },
            {
              question: "What are Gigfunding’s main priorities?",
              answer: "As soon as possible, we want to enable Gift-Aid on our donations to charities as this will generate considerably more money for all the causes. We plan to build relationships with corporations who want to discount skills for disadvantaged hirers. We love the idea that neighbours with less financial freedom can still get access to the skills they require and desire, particularly upskilling related gigs. We want people to eventually be able to choose multiple causes on their profile. This is currently limited by our manual process of payments and accounting. We want to enable digitally excluded members to have access to the site via tablets set up in community centres and charity shops. We want to enable our causes to have access to the highly skilled individuals, via pro-bono match making. This too would need a form of corporate sponsorship.",
              open: false
            },
            {
              question: "Will this take paid jobs away from small business owners?",
              answer: "There could be some instances of this, but only a small percentage. The overall positive impact of the deed is the key aspect and fees won’t be undercutting market rates. We think that more skills will be hired because of the fundraising element, creating requests that would otherwise not have been hired at all Eg. Sarah wants her wall repainted, but can’t justify spending £100 to do it. However, now she knows about Gigfunding, she can feel content in spending the money, as she knows all the money is going to local causes she loves. The painter might only offer the job as a one off, for the year, but Sarah could hire them again, or recommend them to a friend external to Gigfunding, giving the painter a new paying client. We also feel many of the gigs will be tasks that would have normally been favours; eg. Watering your neighbor's plants, doing that job for a mate or walking your friend’s dog.",
              open: false
            },
            {
              question: "What is Gigfunding doing to include ‘digitally excluded’ people?",
              answer: "This is something we have had on our minds since day one. Gigfunding is all about inclusivity and community, enabling everyone to connect and give in the way they want to and are able to. At this stage, the only way we can currently enable digitally excluded people to use the site is through a buddy system.",
              open: false
            }
          ]
        },
        {
          title: 'how to use',
          faqs: [
            {
              question: "What can I use Gigfunding for?",
              answer: "You can use the site to hire skills locally or volunteer your skills to those looking. Think everything from dog walkers to accountants, a gardener or even a language lesson. Use Gigfunding to practise your craft, make new friends, meet new people and most importantly raise money for causes you care about. You cannot use Gigfunding for harmful or illegal activity, see our Terms of Use for full details.",
              open: false
            },
            {

              question: "Is there anything I can't use Gigfunding for?",
              answer: "You cannot use Gigfunding for illegal or harmful activities. The Gigfunding team hold the right to block activities and users deemed inappropriate for our community. (If you spot something inappropriate please email us immediately on team@gigfunding.org with the subject URGENT).",
              open: false
            },
            {

              question: "What skills can I hire?",
              answer: "You can request pretty much any skill you want (as long as it is legal of course!) Here are some ideas below, but the possibilities are endless.Dog Walking  Hedge trimming  Piano lessons  Photography  Help moving house  Computer assistance   Painting  Window cleaning  Language lessons  Flat pack furniture building  Business advice  Hair dressing  Consultancy",
              open: false
            },
            {

              question: "What skills can I volunteer?",
              answer: "You can volunteer pretty much any skill you want (as long as it is legal of course!) Here’s a few questions to help get you started: What are you an expert in?  What do other people come to you for help with?  Do you own a resource that isn’t getting used enough?  What is the thing that you do better than anyone else?  What’s your profession?   Are there skills you offer your friends for free?  What do you enjoy doing for others?",
              open: false
            },
            {

              question: "How do I get started?",
              answer: "Simple. Just sign up, create a profile and you will be able to hire or volunteer the skills you want on the digital marketplace. Make sure to visit our ‘How it works’ page for more in depth info.",
              open: false
            },
            {

              question: "Why can’t people earn some money through the platform?",
              answer: "We decided we didn’t want to begin with this model, as we felt it might attract people to the platform who were more incentivised by their own income, than giving or connecting with others. We want to power social change through honest fundraising. We are however considering adding this feature at a later stage and we will listen to our community to help us decide the direction we take in this area, of course.",
              open: false
            },
            {

              question: "How do I propose a new cause to be fundraised for?",
              answer: "Email us directly, and nominate the cause you love, or ask someone from that cause to get in touch directly, we’d love to hear from them! team@gigfunding.org",
              open: false
            }
          ]
        },
        {
          title: 'safety and security',
          faqs: [
            {
              question: "Are the gigs insured?",
              answer: "Gigfunding does not currently insure gigs. We can’t yet afford to create this feature yet. We strongly advise you to seek out your own insurance as a hirer and volunteer; AND to check the other party has insurance too. Like we said, we’re not into bungee jumps or skydives and at this early stage we don’t allow high risk gigs to be arranged through the platform. We are exploring our options for insurance at a later date in our development but for now we want fundraising to be easy and enjoyable for all involved.",
              open: false
            },
            {
              question: "Are all listings moderated?",
              answer: "Before listings are live we are not able to verify them, but once they are on the site we will be checking and moderating them and will remove anything deemed inappropriate.",
              open: false
            },
            {
              question: "Are users' identity verified?",
              answer: "Our current site is able to verify someone's identity through a STRIPE account sign up to verify they are a real human and not some weird robot. We check users’ profiles and monitor the site and listings, however do emphasise the importance of using your own judgement. Take every necessary precaution you would when going on a first date. Meet in public spaces, ask for professional reviews, insurance proof, verified identities on other sites etc. Okay, maybe not quite like a first date. But if you at any point feel unsafe with the person you’re meeting with, walk away and do not worry, we will refund you.",
              open: false
            }
          ]
        }
      ];
    }
  }
}
