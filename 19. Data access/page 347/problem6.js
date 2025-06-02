const profile = {
    social: {
        id: 1,
        name: 'facebook',
    }
};

const checking = profile?.social?.twitter ?? "Twitter handle not available";
console.log(checking);