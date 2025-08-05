require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY 
const supabase = createClient(supabaseUrl, supabaseKey);


// Sign Up endpoint
app.post('/signup', async (req, res) => {
    const { email, password, name } = req.body;
    if (!email || !password || !name) {
        return res.status(400).json({ error: 'Missing required fields.' });
    }
    const { error } = await supabase.auth.admin.createUser({
        email,
        password,
        user_metadata: { name },
        email_confirm: true
    });
    if (error) {
        return res.status(400).json({ error: error.message });
    }
    return res.json({ message: 'Registration successful! Please check your email for a verification link or OTP.' });
});

// Sign In endpoint
app.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: 'Missing required fields.' });
    }
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    });
    if (error) {
        return res.status(400).json({ error: error.message });
    }
    if (!data.user?.email_confirmed_at) {
        return res.status(400).json({ error: 'Please verify your email before logging in.' });
    }
    return res.json({ message: 'Login successful!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});