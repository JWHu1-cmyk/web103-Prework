import supabase from "./client.js";

export async function getCreators() {
  const { data, error } = await supabase.from("creators").select();

  let contacts = data || [];

  return contacts;
}

export async function createCreator(form) {
  try {
    let creator_id = Math.floor(Math.random() * 32768);

    // Properties to add or update
    let updates = {
      id: creator_id,
      created_at: new Date(), // Use ISO string for date
    };

    // Adding multiple properties using Object.assign()
    let creator = Object.assign({}, form, updates);

    const { data, error } = await supabase.from("creators").insert([creator]);

    if (error) {
      console.error("Error inserting creator:", error);
      alert("Error inserting creator: " + error.message);
      throw error; // Re-throw the error to be caught by the action function
    } else {
      console.log("Creator inserted successfully:", data);
      alert("Creator inserted successfully!");
      return data; // Return the data if needed for further use
    }
  } catch (error) {
    console.error("Unexpected error:", error);
    alert("Unexpected error: " + error.message);
  }
  return;
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