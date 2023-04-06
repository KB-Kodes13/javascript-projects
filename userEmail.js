let appData = {
    name: 'Gmail',
    mailboxes: {
        inbox: {
            primary: [
                {name: 'Alcove', email: 'no-reply@alcoverooms.com', lastMessage: 'Your new lease is ready to sign.', date: 'April 5' },
                {name: 'Full Stack 102', email: 'canvas-admin@stiegleredtech.org', lastMessage: 'Your assignment The Candy Store! has been graded.', date: 'April 5' },
                {name: 'Ben Patrick', email: 'customerservice@atgonlinecoaching.com', lastMessage: 'New Strech Routine for Lower Back Available Now.', date: 'April 5' },
                {name: 'PlayStation', email: 'reply@txn-email.playstation.com', lastMessage: 'Thank you for your purchase.', date: 'April 4' },
            ],
            promotions: [
                {name: 'Ebay', email: 'ebay@reply.ebay.com', lastMessage: 'Get the best deals this week.', date: 'April 5'},
                {name: 'Poshmark', email: 'info@poshmark.com', lastMessage: 'Experience Poshmarks newest way to shop and sell LIVE!', date: 'April 5' },
            ],
            social: [
                {name: 'LinkedIn', email: 'jobs-listings@linkedin.com', lastMessage: 'Booz Allen Hamilton is hiring: Cyber Intern.', date: 'April 5'},
                {name: 'Facebook', email: 'info@facebook.com', lastMessage: 'John has a birthday today, wish him Happy Birthday!!!', date: 'April 5' },
            ],
        }, 
        starred: {}, 
        snoozed: {}, 
        sent: [
            {to: "Hector", from: "Kelan", subject: "Help", body: "JS is tough", status:''},
            {to: "Brandon", from: "Kelan", subject: "Me", body: "Loops are confusing", status:'sent'},
            {to: "Erin", from: "Kelan", subject: "Please", body: "How does this all make sense", status:'sent'}
        ], 
        drafts:  [
            {to: 'Bob', from:'Kelan', message: 'Good Morning, How is your family', date: 'March 13'},
            {to: 'Jane', from:'Kelan', message: 'Good Afternoon', date: 'January 1'},
            {to: 'Bill', from:'Kelan', message: 'Hey, how have you been?', date: 'December 11'}
        ], 
        spam: {}, 
        trash: {},
        },
    contact: [
        { name: "Sher", lastMessage: "Reminder, we have a stand up today, after lecture." },
        { name: "Elizabeth", lastMessage: "Do you need help with any of the assignments?" },
        { name: "Ong", lastMessage: "Good morning, how are you feeling today?" },
        { name: "Alexa", lastMessage: "Good Afternoon!" },
      ],
}

// Get a list of mailbox names
for (const i in appData.mailboxes) {
     console.log([i])   
    }
//Get a list of emails
console.log(appData.mailboxes.inbox[0]);
//Get the text of the second email in the visible list
console.log(appData.mailboxes.inbox.primary[1].lastMessage)
//Mark an email as sent
appData.mailboxes.sent[0].status = 'sent'
console.log(appData.mailboxes.sent[0].status)
//Add a draft email to the drafts mailboxcd
appData.mailboxes.drafts[3] = 'this is another draft email';
console.log(appData.mailboxes.drafts)
