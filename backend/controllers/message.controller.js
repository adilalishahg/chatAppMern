export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { userId } = req.params;
    res.status(200).json({ message, userId });
  } catch (error) {
    console.log(`Error in sendMessage controller ${error.message}`);
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
};
