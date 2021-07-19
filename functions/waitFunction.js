async function waitStep (event) {
    const {req , taskToken }  = event;
    console.log('Logged ', req.document, ' with token ', taskToken );
    return {
        statusCode: 200,
        body: JSON.stringify({ },
        null,
        2
        )};
};

export default waitStep;