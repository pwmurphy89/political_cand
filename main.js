const candidateImages = Object.create({},{
    writable: {
        value: true
    },
    enumerable: {
        value: true
    },
    head: {
        writable: true,
        value: "adsfkj"
    },
    family: {
        writable: true,
        value: "dkl;afj"
    }, 
    constituents: {
        writable: true,
        value: "klj;"
    }
});
const candidateVolunteer = Object.create({},{
    writable: {
        value: true
    },
    enumerable: {
        value: true
    },
    name: {
        writable: true,
        value: "John"
    },
    address: {
        writable: true,
        value: "3233 NSS"
    },
    email: { 
        writable: true,
        value: "volunteer@vol.net"
    },
    phone: {
        writable: true,
        value: "23432423423"
    },
    availability: {
        writable: true,
        value: "Always"
    },
    activities: {
        writable: true,
        value: "anything"
    }
});
const candidateStatement = Object.create({}, {
    enumerable: {
        value: true
    },
    writable: {
        value: true
    },
    taxes: {
        writable: true,
        value: "low"
    },
    jobs: {
        writable: true,
        value: "lots"
    },
    healthcare: {
        writable: true,
        value: "free"
    },
    crime: {
        writable: true,
        value: "none"
    }
});
const candidateInfo = Object.create({}, {
    writable: {
        value: true
    },
    district: {
        writable: true,
        enumerable: true,
        value: "2nd Tennessee"
    },
    statements: {
        enumerable: true,
        writable: true,
        value: candidateStatement
    },
    url_donate: {
        writable: true,
        enumerable: true,
        value: "donateurl.net"
    },
    events: {
        writable: true,
        enumerable: true,
        value: "all these events!"
    },
    volunteer: {
        writable: true,
        enumerable: true,
        value: candidateVolunteer
    },
    biography: {
        writable: true,
        enumerable: true,
        value: "from here"
    },
    images: {
        writable: true,
        enumerable: true,
        value: candidateImages
    },
    mission: {
        writable: true,
        enumerable: true,
        value: "alkdjfdls"
    },
    url_vote: {
        writable: true,
        enumerable: true,
        value: "alkdsf.com"
    }
});

function changeCandidateStatement(prop, change){
    candidateStatement[prop] = change;
};
function changeCandidateInfo(prop, change){
    candidateInfo[prop] = change;
};
function changeCandidateVolunteer(prop, change){
    candidateVolunteer[prop] = change;
};
function changeCandidateImages(prop, change){
    candidateImages[prop] = change;
};






