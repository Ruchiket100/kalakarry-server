import crypto from 'crypto';

const generateId = (): string => {
    const timestamp = Date.now().toString();
  
    const randomString = crypto.randomBytes(16).toString('hex');
  
    return `${timestamp}${randomString}`;
  };

export default generateId;