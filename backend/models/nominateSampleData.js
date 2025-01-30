const mongoose = require("mongoose");

const mongoURL = process.env.MONGO_URL;
async function  main(){
   await mongoose.connect(mongoURL);
}

main().then(()=>{console.log("Connection Successfull.....");}).catch(()=>{console.log("Error Occured during connection");})

const nominateData = require("./nominate.js")

//Sample Data
const nominationSampleData = [
   {
      nominationType:"peer", 
      fullName: "Abhinav Sharma",
      email:"abhinavsharma@gmail.com",
      phone :8765436589,
      company :"BeyondCC ",
      jobTitle :"Founding team member",
      category : "Top TA Leader",
      linkedIn: "https://www.linkedin.com/in/abhinav-sharma11000/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    
      votes: 657,
      peerFullName: "nikita aggarwal",
      whyFit: "I have worked with Abhinav closely in couple of requirements at Zenskar. He’s always gone above and beyond to ensure we have a great client                                        experience and brings out the best candidates.Def one of the most proactive recruiters I have work d with!",
  
    },
  {
      nominationType:"self", 
      fullName: "Srilakshmi Ganta",
      email:"srilakshmiganta@gmail.com",
      phone :9765437689,
      company :"Uber",
      jobTitle: "Sr.Recruiting Manager - India Tech",
      category : "Best GTM/Business Recruiter",
      linkedIn: "https://www.linkedin.com/in/abhinav-sharma11000/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      votes: 108, 
      whyFit: "I am delighted to put forward the nomination of Srilakshmi for the esteemed TA Leadership Award. It is a pleasure to recognize her exceptional    leadership qualities and deep expertise in recruiting strategies. Sri has continuously demonstrated remarkable leadership by successfully hiring top-tier talent for prominent companies like Uber and Microsoft. Not only does she excel in hiring, but she also mentors her team members, fostering growth and development within the team. Additionally, Sri is a highly skilled sourcer, showcasing her versatility and dedication to excellence. Her unparalleled expertise in recruiting strategies is evident through her innovative recruitment methods, which have significantly contributed to the successful filling of critical jobTitles and the improvement of our hiring processes. Sri's forward-thinking approach and unwavering commitment to excellence have not only strengthened our team but also set a high benchmark for others to follow. In summary, Srilakshmi's outstanding leadership and profound knowledge of recruiting strategies make her an ideal candidate for the TA Leadership Award. I wholeheartedly support her nomination and am confident that she will continue to inspire and lead with distinction.",
  
    },
  
  {
      nominationType:"peer", 
      fullName: "Anushree Sharma ",
      jobTitle: "Morningstar • Associate Director",
      email:"anushreesharma@gmail.com",
      phone :9765786756,
      company :"Adobe",
      category : "Candidate Experience & Ops Pro",
      linkedIn: "https://www.linkedin.com/in/anushreesharma/",
      votes: 0,
      peerFullName: "Raj Singh",
      whyFit: "He has started DEI initiative at MoEngage and leading this initiative. MoEngage is known for the best DEI initiative in the industry.",
  
    },
  {
    nominationType:"self", 
      fullName: "Santhosh varghese",
      email:"santhoshvarghese@gmail.com",
      phone :6575437689,
      company :"One.app ",
      jobTitle: "Recruitment Leader",
      category : "Best Employer Branding Champion",
      linkedIn: "https://www.linkedin.com/in/santhosh-vargheseone/",
      votes: 0,
     
      whyFit: "He has started DEI initiative at MoEngage and leading this initiative. MoEngage is known for the best DEI initiative in the industry.",
  
    },
  
  {
    nominationType:"peer", 
      fullName: "Noel Fernandez",
      email:"noelfernandez@gmail.com",
      phone :97654387755,
      company :"TOR Commodities Pvt Ltd ",
      jobTitle: " CHRO",
      category : "Best Referral Champion",
      linkedIn: "https://www.linkedin.com/in/noel-fernandez-hr-professional/",
      votes: 0,
      peerFullName: "Komal Pandey",
      whyFit: "Noel embodies the essence of an exceptional Talent Acquisition leader. As the CHRO at TORQ, he consistently demonstrates an unwavering passion for nurturing talent, fostering innovation, and driving excellence within the TA function. His ability to inspire, support, and elevate his team makes him a true champion of talent acquisition. Noel is known for his generosity, enthusiasm, and a unique ability to turn challenges into opportunities. His fun-loving and food-loving personality adds a personal touch to his leadership style, making the workplace environment collaborative, engaging, and inclusive. He is a firm believer in celebrating team efforts and never misses an opportunity to appreciate contributions, ensuring every individual feels valued. Under his guidance, the team at TORQ has achieved remarkable milestones, showcasing his vision and strategic acumen. Noel’s leadership not only drives successful outcomes for TORQ but also sets a benchmark for excellence in the TA community. His dedication to building strong employer branding, cultivating meaningful relationships, and empowering his team jobTitles him as a deserving recipient of the TOP TA Leader award.",
  
    },
  
  {
    nominationType:"self", 
      fullName: "Shubham Patel",
      email:"shubhampatel@gmail.com",
      phone :6578437689,
      company :"MoEngage ",
      jobTitle: "Talent Partner & Employer Branding",
      category : "Best DEI Advocate",
      linkedIn: "https://www.linkedin.com/in/shubham-patel-he-him-b40689ba/",
      votes: 200,
     
      whyFit: "He has started DEI initiative at MoEngage and leading this initiative. MoEngage is known for the best DEI initiative in the industry.",
  
    },
  {
    nominationType:"peer", 
      fullName: "Ashish Banka",
      email:"ashishbanka@gmail.com",
      phone :9765437689,
      company :"Herkey ",
      jobTitle: "Senior Recruitment Manager",
      category : "Best GTM/Business Recruiter",
      linkedIn: "https://www.linkedin.com/in/shubham-patel-he-him-b40689ba/",
      votes: 367,
      peerFullName: "Aditya Singh",
      whyFit: "He has started DEI initiative at MoEngage and leading this initiative. MoEngage is known for the best DEI initiative in the industry.",
  
    },
  {
    nominationType:"self", 
      fullName: "Firdouse Begum",
      email:"firdousebegum@gmail.com",
      phone :9765437689,
      company :"MoEngage ",
      jobTitle: "Talent Partner & Employer Branding",
      category : "Candidate Experience & Ops Pro",
      linkedIn: "https://www.linkedin.com/in/shubham-patel-he-him-b40689ba/",
      votes: 98,
     
      whyFit: "He has started DEI initiative at MoEngage and leading this initiative. MoEngage is known for the best DEI initiative in the industry.",
  
    },
  {
    nominationType:"peer", 
      fullName: "Kshira Sagar",
      email:"kshirasagar@gmail.com",
      phone :7764573647,
      company :"Adobe",
      jobTitle: "Talent Partner",
      category : "Best Referral Champion",
      linkedIn: "https://www.linkedin.com/in/kshira-sagar-baa5a43a/",
      votes: 98,
      peerFullName: "Swetha Yalagach",
      whyFit: "I am honored to category  Sagar for the DEI Advocate Award in recognition of their exceptional contributions to hiring diverse talent and advancing diversity, equity, and inclusion. Sagar has shown unwavering commitment to creating a more inclusive and diverse workplace at Microsoft and Adobe. Their innovative approaches to recruitment and their ability to identify and attract diverse talent have significantly enriched our team's comjobTitle. Furthermore, Sagar’s efforts have gone beyond just hiring. They have been instrumental in fostering an inclusive culture where every team member feels valued and supported. In summary, Sagar's dedication to diversity, equity, and inclusion, combined with their exceptional skill in recruiting diverse talent, make them a standout candidate for the DEI Advocate Award. I wholeheartedly endorse their nomination and believe that their work will continue to drive positive change within our organization and beyond.",
  
    },
  
  {
    nominationType:"self", 
      fullName: "Indu Priya",
      email:"indupriya@gmail.com",
      phone :9765437689,
      company :"Scadea Software Solutions ",
      jobTitle: "Director Human Resources",
      category : "Best Employer Branding Champion",
      linkedIn: "https://www.linkedin.com/in/indupriya1269/",
      votes: 904,
      
      whyFit: "she has started DEI initiative at MoEngage and leading this initiative. MoEngage is known for the best DEI initiative in the industry.",
  
    },
  
  {
    nominationType:"peer", 
      fullName: "Vinod Mathad",
      email:"vinodmathad@gmail.com",
      phone :9876543213,
      company :"FIDIUS Advisory ",
      jobTitle: " Associate Principal",
      category : "Best Leadership Recruiter",
      linkedIn: "https://www.linkedin.com/in/vinod-mathad/",
      votes: 275,
      peerFullName: "Manav Das",
      whyFit: "Vinod has great ability to identify passive talent and ensure an great experience in interview process and overall client experience in onboarding. His Offer to Joining ratio is almost 100 percent, especially in Data science leadership skills.",
  
    },
  {
    nominationType:"self", 
      fullName: "Lakshmikanth Byreddy",
      email:"lakshmikanthbyreddy@gmail.com",
      phone :8875437689,
      company :"Pega Systems",
      jobTitle: "Sr. Manager Recruitments",
      category : "Candidate Experience & Ops Pro",
      linkedIn: "https://www.linkedin.com/in/shubham-patel-he-him-b40689ba/",
      votes: 890,
     
      whyFit: "He is very strong in to souring and finding top leaders. he is very focussed and played a vital role in setting up new COE.",
  
    },
  {
    nominationType:"peer", 
      fullName: "Ankita Sharan",
      email:"ankitasharan@gmail.com",
      phone :9765435564,
      company :"Elastic Technologies India ",
      jobTitle: " Lead Tech Recruiter",
      category : "Best GTM/Business Recruiter",
      linkedIn: "http://https//www.linkedin.com/in/ankitasharan/",
      votes: 768,
      peerFullName: "Uttam Sanghi",
      whyFit: "Ankita has very strong stakeholder management and interpersonal skills. She has closed multiple leadership (Director and above) roles for us at a global level and worked with some Global leaders in driving exceptional results both in recruiting and global projects.",
  
    },
  {
    nominationType:"self", 
      fullName: "Jose Merciline",
      email:"josemerciline@gmail.com",
      phone :7654577689,
      company :"247hire",
      jobTitle: "Lead TA Specialist",
      category : "Best Employer Branding Champion",
      linkedIn: "https://www.linkedin.com/in/josemerciline/",
      votes: 490,
     
      whyFit: "He is very strong in to souring and finding top leaders. he is very focussed and played a vital role in setting up new COE.",
  
    },
  {
    nominationType:"peer", 
      fullName: "David Netto",
      email:"davidnetto@gmail.com",
      phone :5465437689,
      company :"ADP India ",
      jobTitle: "Senior Talent Acquisition Business Partner",
      category : "Best Referral Champion",
      linkedIn: "https://www.linkedin.com/in/david-nettojuly12/",
      votes: 670,
      peerFullName: "self",
      whyFit: "He is very strong in to souring and finding top leaders. he is very focussed and played a vital role in setting up new COE.",
  
    },
  
  {
    nominationType:"self", 
      fullName: "Fathima Nazreen",
      email:"fathimanazreen@gmail.com",
      phone :7865437689,
      company :"Mahy khoory",
      jobTitle: "Recruiter",
      category : "Best Tech Recruiter",
      linkedIn: "https://www.linkedin.com/in/fathima-nazreen5522/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      votes: 890,
      
      whyFit: "Knows her job too well Her skills to find proper match for the role of job description is exceptional",
  
    },
  {
    nominationType:"peer", 
      fullName: "Harish Boddu",
      email:"harishboddu@gmail.com",
      phone :5465437634,
      company :"Simplify360 (A Nextiva Company) ",
      jobTitle: "Lead Technical Recruiter",
      category : "Candidate Experience & Ops Pro",
      linkedIn: "https://www.linkedin.com/in/harishboddu/",
      votes: 890,
      peerFullName: "Arjun Reddy",
      whyFit: "Knows her job too well Her skills to find proper match for the role of job description is exceptional",
  
    },
  {
    nominationType:"self", 
      fullName: "Rati Motewar-Choundawar",
      email:"ratimotewar@gmail.com",
      phone :6765437609,
      company :"Posiview Digital Technologies ",
      jobTitle: "Head HR",
      category : "Best Employer Branding Champion",
      linkedIn: "https://www.linkedin.com/in/rati-choundawar-68236b38/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      votes: 560,
     
      whyFit: "Knows her job too well Her skills to find proper match for the role of job description is exceptional",
  
    },
  {
    nominationType:"peer", 
      fullName: "Satish Ch",
      email:"satishch@gmail.com",
      phone :4234566748,
      company :"Cloud Peritus ",
      jobTitle: " Lead Recruiter",
      category : "Best Referral Champion",
      linkedIn: "https://www.linkedin.com/in/satish-ch/",
      votes: 435,
      peerFullName: "Raj Aditya",
      whyFit: "Knows her job too well Her skills to find proper match for the role of job description is exceptional",
  
    },
  {
    nominationType:"self", 
      fullName: "Jayaseelan Balasubramaniam",
      email:"jayaseelanbalasubramaniam@gmail.com",
      phone :7665364899,
      company :"Netskope Software India ",
      jobTitle: "Talent Acquisition Specialist",
      category : "Best Tech Recruiter",
      linkedIn: "https://www.linkedin.com/in/jayaseelanbalasubramaniam/",
      votes: 390,
     
      whyFit: "Knows her job too well Her skills to find proper match for the role of job description is exceptional",
  
    },

  
]
nominateData.insertMany(nominationSampleData).then(()=>{console.log("Data Added Successfully....");})