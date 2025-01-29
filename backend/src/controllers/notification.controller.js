export const getNotifications = async (req, res) => {
  try {
  } catch (error) {
    console.log("Error in getNotifications function", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteNotification = async(req, res) => {
    try {
        
    } catch (error) { 
        console.log("Error in deleteNotifications function", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}