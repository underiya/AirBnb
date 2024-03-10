export const handleDelete = async (id, setDele) => {
  try {
    const response = await fetch(
        `https://backend-airbnb-stqx.onrender.com/api/locations/${id}`,
        {
          method: 'DELETE',
        },
    );
    if (response.ok) {
      const dat = await response.json();
      console.log(dat);
      setDele((prev) => !prev);
    } else {
      console.error(
          'Failed to delete data. Server returned status: ',
          response.status,
      );
    }
  } catch (error) {
    console.error('Error deleting data: ', error);
  }
};
