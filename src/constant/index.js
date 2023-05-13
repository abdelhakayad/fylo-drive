import {featureCollab,featureFile,featurePc,featureSecurity,iconEmail,iconPhone,profile1,profile2,profile3,facebook,instagram,twitter } from '../assets'

export const navLinks = [
    {
        id: "features",
        title: "Features",
    },

    {
        id: "team",
        title: "Team",
    },

    {
        id: "sign in",
        title: "Sign in",
    },
];

export const features = [

    {
        id: "featurePc",
        icon: featurePc,
        title: "Acces your files, anywhere",
        content: 
                "The ability to use a smartphone, tablet, or computer to acces your account means your files follow you everywher.",
 

    },

    {
        id: "featureSecurity",
        icon: featureSecurity,
        title: "Security you can trust",
        content: 
                "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files",
 

    },

    {
        id: "featureCollab",
        icon: featureCollab,
        title: "Real-time collaboration",
        content: 
                "Securely share file and folders with friends, family and colleagues for live collaboration. No email attachments required",
 

    },

    {
        id: "featureFile",
        icon: featureFile,
        title: "Store any type of file",
        content: 
                "wherther you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
 

    },
];

export const feedBack = [

    {   
        id: "profile1",
        icon: profile1,
        name: "Satish Patel",
        title: "Founder & CEO, Huddle",
        content: "Fylo has imporved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    },
    {   
        id: "profile2",
        icon: profile2,
        name: "Bruce McKenzie",
        title: "Founder & CEO, Huddle",
        content: "Fylo has imporved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    },

    {   
        id: "profile3",
        icon: profile3,
        name: "Iva Boyd",
        title: "Founder & CEO, Huddle",
        content: "Fylo has imporved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    },

];

export const footerInfo = [

    {
        id: "phone",
        icon: iconPhone,
        info: "+1-543-123-4567",
    },
    {
        id: "email",
        icon: iconEmail,
        info: "example@fylo.com",
    },
];


export const footerLinks = [

    {
        links1: [
            {
                name: "About Us",
                link: "/about",
            },
            {
                name: "Jobs",
                link: "/jobs",
            },
            {
                name: "Press",
                link: "/press",
            },
            {
                name: "Blog",
                link: "/blog",
            },

        ] ,  
    },

    {
        links2: [
            {
                name: "Contact Us",
                link: "/contact",
            },
            {
                name: "Terms",
                link: "/terms",
            },
            {
                name: "Privacy",
                link: "/privacy",
            },
        ] ,  
    },
];

export const socialMedia = [
    {
        id: "fb",
        icon: facebook,
        link: "https://www.facebook.com/",
    },
    {
        id: "twt",
        icon: twitter,
        link: "https://www.twitter.com/",
    },
    
    {
        id: "ig",
        icon: instagram,
        link: "https://www.instagram.com/",
    },
    
];