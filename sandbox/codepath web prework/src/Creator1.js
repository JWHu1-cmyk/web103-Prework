import supabase from "./client.js";

export async function getCreators() {
  // hu: good

  try {
    const { data, error } = await supabase.from("creators").select();

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Unexpected error:", error);
    return null;
  }
}

export async function deleteCreator(id) {
  // hu: good
  try {
    const { data, error } = await supabase
      .from('creators')
      .delete()
      .eq('id', id);

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error deleting creator:", error.message);
    return null;
  }
}

export async function updateCreators(id, name, url, description, imageURL) {
  try {
    const { data, error } = await supabase
      .from('creators')  // assuming the table name is 'creators'
      .update({
        name: name,
        url: url,
        description: description,
        imageURL: imageURL
      })
      .eq('id', id);

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Unexpected error:", error);
    return null;
  }
}


export async function createCreator(form) {
  // hu: good
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
async function testCreator() {
  // ***
  // Simulated form data
  // const form = {
  //   name: 'John Doe',

  //   description: 'A sample creator description',
  //   imageURL: 'https://johndoe.com/image.jpg'
  // };

  // // Call createCreator with the simulated form data
  // await createCreator(form);

  // // ***
  // const id = 8651

  // // Call deleteCreators with the simulated form data
  // await deleteCreators(id);

  // // ***
  // const creators = await getCreators();
  // console.log(creators);

  // ***
  // Simulated form data
  const form = {
    id: '22489',
    name: 'jay',
    imageURL: 'https://johndoe.com/image.jpg'
  };

  console.log(form.description);

  // Call createCreator with the simulated form data
  await updateCreators(form.id, form.name, form.url, form.description, form.imageURL);

}

// Run the test
testCreator();