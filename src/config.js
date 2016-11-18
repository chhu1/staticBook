const config = {
    dev: {
        apiDomain: 'http://192.168.0.106:3000'
    },
    ppe: {
        apiDomain: 'http://ppe.api.server.com'
    },
    prod: {
        apiDomain: 'https://api.server.com'
    }
}

let env = config['dev'];
const apiDomain = env.apiDomain;

export apiDomain;
