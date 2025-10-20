const { createApp } = Vue;

createApp({
  data() {
    return {
      loggedIn: false,
      userType: "",
      showCart: false,
      search: "",
      sortBy: "",
      sortOrder: "asc",
      checkoutName: "",
      checkoutPhone: "",
      cart: [],
      books: [
        { title: "Python Programming", price: 12, color: "#39210eff", location: "London Campus", spaces: 5 },
        { title: "Mathematics Essentials", price: 10, color: "#0a322dff", location: "Dubai Campus", spaces: 8 },
        { title: "English Grammar", price: 9, color: "#4c170aff", location: "Online", spaces: 6 },
        { title: "Arabic Language", price: 11, color: "#083449ff", location: "Mauritius Campus", spaces: 7 },
        { title: "Anatomy Explained", price: 15, color: "#372804ff", location: "London Campus", spaces: 4 },
        { title: "Physics for Beginners", price: 13, color: "#0c2b32ff", location: "Dubai Campus", spaces: 5 },
        { title: "Chemistry Concepts", price: 14, color: "#071e41ff", location: "Online", spaces: 6 },
        { title: "Biology Made Simple", price: 12, color: "#053720ff", location: "Mauritius Campus", spaces: 8 },
        { title: "Computer Science 101", price: 16, color: "#1d0440ff", location: "London Campus", spaces: 5 },
        { title: "World History", price: 10, color: "#410720ff", location: "Online", spaces: 7 }
        
      ]
    };
  },
  computed: {
    filteredBooks() {
      const term = this.search.toLowerCase();
      return this.books.filter(b =>
        b.title.toLowerCase().includes(term) ||
        b.location.toLowerCase().includes(term) ||
        b.price.toString().includes(term) ||
        b.spaces.toString().includes(term)
      );
    },
    sortedBooks() {
      let list = this.filteredBooks;
      if (this.sortBy) {
        list = [...list].sort((a, b) => {
          if (this.sortOrder === "asc") return a[this.sortBy] > b[this.sortBy] ? 1 : -1;
          else return a[this.sortBy] < b[this.sortBy] ? 1 : -1;
        });
      }
      return list;
    },
    totalPrice() {
      const total = this.cart.reduce((sum, book) => sum + book.price, 0);
      return this.userType === "Student" ? (total * 0.9).toFixed(2) : total.toFixed(2);
    },
    validCheckout() {
      const nameValid = /^[A-Za-z\s]+$/.test(this.checkoutName);
      const phoneValid = /^[0-9]+$/.test(this.checkoutPhone);
      return nameValid && phoneValid;
    }
  },
  methods: {
    login() {
      if (this.userType) this.loggedIn = true;
      else alert("Please select your user type");
    },
    logout() {
      this.loggedIn = false;
      this.userType = "";
      this.cart = [];
      this.search = "";
    },
    addToCart(book) {
      if (book.spaces > 0) {
        this.cart.push(book);
        book.spaces--;
      }
    },
    removeFromCart(index) {
      const book = this.cart[index];
      book.spaces++;
      this.cart.splice(index, 1);
    },
    toggleCart() {
      this.showCart = !this.showCart;
    },
    checkout() {
      alert(`Order confirmed for ${this.checkoutName}!`);
      this.cart = [];
      this.checkoutName = "";
      this.checkoutPhone = "";
      this.showCart = false;
    }
  }
}).mount("#app");
