let initialState = {
    friendsWidget: [
        { id: 0, userName: "Mother", photo: "https://png.pngtree.com/element_origin_min_pic/12/03/20/1656e3909271e51.jpg" },
        { id: 1, userName: "Father", photo: "https://png.pngtree.com/element_origin_min_pic/12/03/20/1656e3909271e51.jpg" },
        { id: 2, userName: "Marina", photo: "https://png.pngtree.com/element_origin_min_pic/12/03/20/1656e3909271e51.jpg" },
        { id: 3, userName: "Grey", photo: "https://png.pngtree.com/element_origin_min_pic/12/03/20/1656e3909271e51.jpg" },
    ],
};

const friendsReducer = (state = initialState, action) => { 
    return state;
}

export default friendsReducer;