import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://cgdcygewljqtwnmdwznj.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNnZGN5Z2V3bGpxdHdubWR3em5qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU5MjgyNzEsImV4cCI6MjEwMTUwNDI3MX0.Xqgp9dACpYqtkQPDcG4Ny8NEt-HQD3GrzHzM0Tz4yGI";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);