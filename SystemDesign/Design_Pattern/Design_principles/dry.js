// Don’t Repeat Yourself

// Before Dry

// file A
function isEmail(s) { return /\S+@\S+\.\S+/.test(s); }

// file B
function isEmail2(s) { return /\S+@\S+\.\S+/.test(s); } // duplicate!


// After Dry

// validators.js
export const isEmail = s => /\S+@\S+\.\S+/.test(s);

// anywhere else
import { isEmail } from './validators.js';
if (!isEmail(input)) throw new Error('Invalid email');
