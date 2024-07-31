import { createClient } from '@supabase/supabase-js';

// Initialize the Supabase client
const supabaseUrl = "https://rjgmicsaqahxddekejrt.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqZ21pY3NhcWFoeGRkZWtlanJ0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxOTgxNTc1OCwiZXhwIjoyMDM1MzkxNzU4fQ.BwI7RmBKDig79KZAwtnhEifq3xq9BNGV9FsG4_Tq9n0";
const supabase = createClient(supabaseUrl, supabaseKey);

export async function createCreator(form) {
  let creator_id = Math.floor(Math.random() * 32768);

  // Properties to add or update
  let updates = {
    id: creator_id,
    created_at: new Date().toISOString(), // Proper ISO timestamp
  };

  // Adding multiple properties using Object.assign()
  let creator = Object.assign({}, form, updates);

  const { data, error } = await supabase.from("creators").insert([creator]);

  if (error) {
    console.error("Error inserting creator:", error);
  } else {
    console.log("Creator inserted successfully:", data);
  }
}

// Function to simulate form submission and call createCreator
async function testCreateCreator() {
  // Simulated form data
  const form = {
    name: 'John Doe',
 
    description: 'A sample creator description',
    imageURL: 'https://johndoe.com/image.jpg'
  };

  // Call createCreator with the simulated form data
  await createCreator(form);
}

// Run the test
testCreateCreator();
