const path = require('path');
const fs = require('fs');
const solc = require('solc');

// Define the path to the Solidity contract file
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');

// Read the Solidity source code
const source = fs.readFileSync(inboxPath, 'utf-8');

// Prepare the input for the compiler
const input = {
    language: 'Solidity',
    sources: {
        'Inbox.sol': {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*']
            }
        }
    }
};

try {
    // Compile the Solidity code
    const compiled = solc.compile(JSON.stringify(input), 1);
    const output = JSON.parse(compiled);

    // Check if compilation was successful
    if (output.errors) {
        console.error('Compilation errors:', output.errors);
    } else {
        console.log(output);
    }
} catch (error) {
    console.error('Compilation error:', error);
}
