import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm"

const supabaseUrl = "https://giqkgvibmogftdbwqfri.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdpcWtndmlibW9nZnRkYndxZnJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwNTc5MTcsImV4cCI6MjA4ODYzMzkxN30.-TlQ0m7K5cmJPl0SiFOZR0AS8OgrTI_EzQNuGD9v4e0"

const supabase = createClient(supabaseUrl, supabaseKey)

export { supabase }
