const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, ScanCommand } = require('@aws-sdk/lib-dynamodb');

const TABLE_NAME = process.env.CHARGERS_TABLE;

// Konfiguracija DynamoDB klijenta za LocalStack
const DYNAMODB_ENDPOINT = process.env.LOCALSTACK_HOSTNAME
  ? `http://${process.env.LOCALSTACK_HOSTNAME}:4566`
  : 'http://localhost:4566';

const client = new DynamoDBClient({
  endpoint: DYNAMODB_ENDPOINT,
  region: 'us-east-1',
});
const docClient = DynamoDBDocumentClient.from(client);

// CORS headers za frontend (dozvoli pristup sa S3 website-a)
const ALLOWED_ORIGIN = 'http://punjaci-website.s3-website.localhost.localstack.cloud:4566';
const corsHeaders = {
  'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
};

exports.handler = async () => {

  try {
    const result = await docClient.send(new ScanCommand({
        TableName: TABLE_NAME,
    }));

    console.log(`Pronađeno ${result.Items?.length || 0} punjača`);

    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({
        town: "",
        count: result.Items?.length || 0,
        chargers: result.Items || [],
      }),
    };
  } catch (error) {
    console.error('Greška pri query-ju DynamoDB:', error);
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
