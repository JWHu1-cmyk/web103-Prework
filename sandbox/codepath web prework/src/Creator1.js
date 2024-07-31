import supabase from "./client.js";

export async function getCreators() {
  const { data, error } = await supabase.from("creators").select();

  let contacts = data || [];

  return contacts;
}
export async function createCreator(form) {
  let creator_id = Math.floor(Math.random() * 32768);
 
  // Properties to add or update
  let updates = {
      id: creator_id,
      created_at: Date.now(),
  };

  // Adding multiple properties using Object.assign()
  let creator = Object.assign(form, updates);

  const { error } = await supabase.from("creators").insert(creator);

  if (error) {
    console.error("Error inserting creator:", error);
    alert("Error inserting creator: " + error.message);
  } else {
    console.log("Creator inserted successfully:", data);
    alert("Creator inserted successfully!");
  }

  return;
}
