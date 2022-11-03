exports.handler = async(event) =>  {
    const response = {
        statusCode: 200,
        body: JSON.stringify('Github actions example test')
    }
    return response;
}