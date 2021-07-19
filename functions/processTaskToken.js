const AWS =  require('aws-sdk');
const stepFunctions =  new AWS.StepFunctions();

async function processTaskToken(event) {

    console.log(event);
    console.log(event.body);
    const requestBody =  JSON.parse(event.body);

    const taskToken = requestBody.token;
    let output = JSON.stringify(
        {
            success: true,
            code: requestBody.code
         }
    );

    let params = {
        output,
        taskToken : taskToken
    };

    await stepFunctions.sendTaskSuccess(params).promise();
    return {
        statusCode: 200,
        body: output,
    };
};

export default processTaskToken;