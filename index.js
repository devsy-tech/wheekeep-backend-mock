const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8080;

// Middleware
app.use(cors());
app.use(express.json());

const UNITS = [
  {
    id: 1,
    title: "Small Portable Storage",
    date: "22-2-2024",
    images: [
      "https://images.unsplash.com/photo-1533643643812-4143839ba096?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1615044606239-76ef89b01a34?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1595871685450-d5d2e8847a64?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1533643643812-4143839ba096?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1615044606239-76ef89b01a34?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1595871685450-d5d2e8847a64?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    id: 2,
    title: "Medium Portable Storage",
    date: "22-2-2024",
    images: [
      "https://images.unsplash.com/photo-1533643643812-4143839ba096?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1615044606239-76ef89b01a34?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1595871685450-d5d2e8847a64?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1533643643812-4143839ba096?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1615044606239-76ef89b01a34?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1595871685450-d5d2e8847a64?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    id: 3,
    title: "Large Portable Storage",
    date: "22-2-2024",
    images: [
      "https://images.unsplash.com/photo-1533643643812-4143839ba096?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1615044606239-76ef89b01a34?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1595871685450-d5d2e8847a64?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1533643643812-4143839ba096?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1615044606239-76ef89b01a34?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1595871685450-d5d2e8847a64?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    id: 4,
    title: "Small Portable Storage",
    date: "22-2-2024",
    images: [
      "https://images.unsplash.com/photo-1533643643812-4143839ba096?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1615044606239-76ef89b01a34?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1595871685450-d5d2e8847a64?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1533643643812-4143839ba096?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1615044606239-76ef89b01a34?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1595871685450-d5d2e8847a64?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    id: 5,
    title: "Medium Portable Storage",
    date: "22-2-2024",
    images: [
      "https://images.unsplash.com/photo-1533643643812-4143839ba096?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1615044606239-76ef89b01a34?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1595871685450-d5d2e8847a64?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1533643643812-4143839ba096?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1615044606239-76ef89b01a34?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1595871685450-d5d2e8847a64?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    id: 6,
    title: "Large Portable Storage",
    date: "22-2-2024",
    images: [
      "https://images.unsplash.com/photo-1533643643812-4143839ba096?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1615044606239-76ef89b01a34?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1595871685450-d5d2e8847a64?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1533643643812-4143839ba096?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1615044606239-76ef89b01a34?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1595871685450-d5d2e8847a64?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    id: 7,
    title: "Small Portable Storage",
    date: "22-2-2024",
    images: [
      "https://images.unsplash.com/photo-1533643643812-4143839ba096?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1615044606239-76ef89b01a34?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1595871685450-d5d2e8847a64?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1533643643812-4143839ba096?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1615044606239-76ef89b01a34?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1595871685450-d5d2e8847a64?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    id: 8,
    title: "Medium Portable Storage",
    date: "22-2-2024",
    images: [
      "https://images.unsplash.com/photo-1533643643812-4143839ba096?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1615044606239-76ef89b01a34?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1595871685450-d5d2e8847a64?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1533643643812-4143839ba096?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1615044606239-76ef89b01a34?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1595871685450-d5d2e8847a64?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    id: 9,
    title: "Large Portable Storage",
    date: "22-2-2024",
    images: [
      "https://images.unsplash.com/photo-1533643643812-4143839ba096?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1615044606239-76ef89b01a34?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1595871685450-d5d2e8847a64?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1533643643812-4143839ba096?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1615044606239-76ef89b01a34?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1595871685450-d5d2e8847a64?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    id: 10,
    title: "Small Portable Storage",
    date: "22-2-2024",
    images: [
      "https://images.unsplash.com/photo-1533643643812-4143839ba096?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1615044606239-76ef89b01a34?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1595871685450-d5d2e8847a64?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1533643643812-4143839ba096?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1615044606239-76ef89b01a34?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1595871685450-d5d2e8847a64?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    id: 11,
    title: "Medium Portable Storage",
    date: "22-2-2024",
    images: [
      "https://images.unsplash.com/photo-1533643643812-4143839ba096?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1615044606239-76ef89b01a34?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1595871685450-d5d2e8847a64?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1533643643812-4143839ba096?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1615044606239-76ef89b01a34?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1595871685450-d5d2e8847a64?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    id: 12,
    title: "Large Portable Storage",
    date: "22-2-2024",
    images: [
      "https://images.unsplash.com/photo-1533643643812-4143839ba096?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1615044606239-76ef89b01a34?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1595871685450-d5d2e8847a64?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1533643643812-4143839ba096?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1615044606239-76ef89b01a34?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1595871685450-d5d2e8847a64?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
];

const PAYMENTS = [
  {
    id: 100,
    date: "22-2-2024",
    price: 3025,
    status: "pending",
    order_items: [
      {
        id: 123,
        name: "Small Portable Storage",
        quantity: 1,
        price: 3000,
      },
    ],
    merchandise_items: [
      {
        id: 312,
        name: "Bubble Wrap",
        quantity: 1,
        price: 10,
      },
    ],
    shipping_address: "1226 University Dr Melno Park, CA 94003-1324",
    stored_address: "1226 University Dr Melno Park, CA 94003-1324",
    monthly_item_total: 25,
    one_time_item_total: 50,
    items_total: 150,
    vat: 2025,
    total: 3000,
  },
  {
    id: 110,
    date: "22-2-2024",
    price: 3025,
    status: "pending",
    order_items: [
      {
        id: 123,
        name: "Small Portable Storage",
        quantity: 1,
        price: 3000,
      },
    ],
    merchandise_items: [
      {
        id: 312,
        name: "Bubble Wrap",
        quantity: 1,
        price: 10,
      },
    ],
    shipping_address: "1226 University Dr Melno Park, CA 94003-1324",
    stored_address: "1226 University Dr Melno Park, CA 94003-1324",
    monthly_item_total: 25,
    one_time_item_total: 50,
    items_total: 150,
    vat: 2025,
    total: 3000,
  },
  {
    id: 120,
    date: "22-2-2024",
    price: 3025,
    status: "pending",
    order_items: [
      {
        id: 123,
        name: "Small Portable Storage",
        quantity: 1,
        price: 3000,
      },
    ],
    merchandise_items: [
      {
        id: 312,
        name: "Bubble Wrap",
        quantity: 1,
        price: 10,
      },
    ],
    shipping_address: "1226 University Dr Melno Park, CA 94003-1324",
    stored_address: "1226 University Dr Melno Park, CA 94003-1324",
    monthly_item_total: 25,
    one_time_item_total: 50,
    items_total: 150,
    vat: 2025,
    total: 3000,
  },
  {
    id: 130,
    date: "22-2-2024",
    price: 3025,
    status: "complete",
    order_items: [
      {
        id: 123,
        name: "Small Portable Storage",
        quantity: 1,
        price: 3000,
      },
    ],
    merchandise_items: [
      {
        id: 312,
        name: "Bubble Wrap",
        quantity: 1,
        price: 10,
      },
    ],
    shipping_address: "1226 University Dr Melno Park, CA 94003-1324",
    stored_address: "1226 University Dr Melno Park, CA 94003-1324",
    monthly_item_total: 25,
    one_time_item_total: 50,
    items_total: 150,
    vat: 2025,
    total: 3000,
  },
  {
    id: 140,
    date: "22-2-2024",
    price: 3025,
    status: "complete",
    order_items: [
      {
        id: 123,
        name: "Small Portable Storage",
        quantity: 1,
        price: 3000,
      },
    ],
    merchandise_items: [
      {
        id: 312,
        name: "Bubble Wrap",
        quantity: 1,
        price: 10,
      },
    ],
    shipping_address: "1226 University Dr Melno Park, CA 94003-1324",
    stored_address: "1226 University Dr Melno Park, CA 94003-1324",
    monthly_item_total: 25,
    one_time_item_total: 50,
    items_total: 150,
    vat: 2025,
    total: 3000,
  },
  {
    id: 222,
    date: "22-2-2024",
    price: 3025,
    status: "complete",
    order_items: [
      {
        id: 123,
        name: "Small Portable Storage",
        quantity: 1,
        price: 3000,
      },
    ],
    merchandise_items: [
      {
        id: 312,
        name: "Bubble Wrap",
        quantity: 1,
        price: 10,
      },
    ],
    shipping_address: "1226 University Dr Melno Park, CA 94003-1324",
    stored_address: "1226 University Dr Melno Park, CA 94003-1324",
    monthly_item_total: 25,
    one_time_item_total: 50,
    items_total: 150,
    vat: 2025,
    total: 3000,
  },
  {
    id: 333,
    date: "22-2-2024",
    price: 3025,
    status: "complete",
    order_items: [
      {
        id: 123,
        name: "Small Portable Storage",
        quantity: 1,
        price: 3000,
      },
    ],
    merchandise_items: [
      {
        id: 312,
        name: "Bubble Wrap",
        quantity: 1,
        price: 10,
      },
    ],
    shipping_address: "1226 University Dr Melno Park, CA 94003-1324",
    stored_address: "1226 University Dr Melno Park, CA 94003-1324",
    monthly_item_total: 25,
    one_time_item_total: 50,
    items_total: 150,
    vat: 2025,
    total: 3000,
  },
  {
    id: 150,
    date: "22-2-2024",
    price: 3025,
    status: "complete",
    order_items: [
      {
        id: 123,
        name: "Small Portable Storage",
        quantity: 1,
        price: 3000,
      },
    ],
    merchandise_items: [
      {
        id: 312,
        name: "Bubble Wrap",
        quantity: 1,
        price: 10,
      },
    ],
    shipping_address: "1226 University Dr Melno Park, CA 94003-1324",
    stored_address: "1226 University Dr Melno Park, CA 94003-1324",
    monthly_item_total: 25,
    one_time_item_total: 50,
    items_total: 150,
    vat: 2025,
    total: 3000,
  },
  {
    id: 160,
    date: "22-2-2024",
    price: 3025,
    status: "complete",
    order_items: [
      {
        id: 123,
        name: "Small Portable Storage",
        quantity: 1,
        price: 3000,
      },
    ],
    merchandise_items: [
      {
        id: 312,
        name: "Bubble Wrap",
        quantity: 1,
        price: 10,
      },
    ],
    shipping_address: "1226 University Dr Melno Park, CA 94003-1324",
    stored_address: "1226 University Dr Melno Park, CA 94003-1324",
    monthly_item_total: 25,
    one_time_item_total: 50,
    items_total: 150,
    vat: 2025,
    total: 3000,
  },
  {
    id: 165,
    date: "22-2-2024",
    price: 3025,
    status: "complete",
    order_items: [
      {
        id: 123,
        name: "Small Portable Storage",
        quantity: 1,
        price: 3000,
      },
    ],
    merchandise_items: [
      {
        id: 312,
        name: "Bubble Wrap",
        quantity: 1,
        price: 10,
      },
    ],
    shipping_address: "1226 University Dr Melno Park, CA 94003-1324",
    stored_address: "1226 University Dr Melno Park, CA 94003-1324",
    monthly_item_total: 25,
    one_time_item_total: 50,
    items_total: 150,
    vat: 2025,
    total: 3000,
  },
  {
    id: 180,
    date: "22-2-2024",
    price: 3025,
    status: "complete",
    order_items: [
      {
        id: 123,
        name: "Small Portable Storage",
        quantity: 1,
        price: 3000,
      },
    ],
    merchandise_items: [
      {
        id: 312,
        name: "Bubble Wrap",
        quantity: 1,
        price: 10,
      },
    ],
    shipping_address: "1226 University Dr Melno Park, CA 94003-1324",
    stored_address: "1226 University Dr Melno Park, CA 94003-1324",
    monthly_item_total: 25,
    one_time_item_total: 50,
    items_total: 150,
    vat: 2025,
    total: 3000,
  },
  {
    id: 200,
    date: "22-2-2024",
    price: 3025,
    status: "complete",
    order_items: [
      {
        id: 123,
        name: "Small Portable Storage",
        quantity: 1,
        price: 3000,
      },
    ],
    merchandise_items: [
      {
        id: 312,
        name: "Bubble Wrap",
        quantity: 1,
        price: 10,
      },
    ],
    shipping_address: "1226 University Dr Melno Park, CA 94003-1324",
    stored_address: "1226 University Dr Melno Park, CA 94003-1324",
    monthly_item_total: 25,
    one_time_item_total: 50,
    items_total: 150,
    vat: 2025,
    total: 3000,
  },
  {
    id: 201,
    date: "22-2-2024",
    price: 3025,
    status: "complete",
    order_items: [
      {
        id: 123,
        name: "Small Portable Storage",
        quantity: 1,
        price: 3000,
      },
    ],
    merchandise_items: [
      {
        id: 312,
        name: "Bubble Wrap",
        quantity: 1,
        price: 10,
      },
    ],
    shipping_address: "1226 University Dr Melno Park, CA 94003-1324",
    stored_address: "1226 University Dr Melno Park, CA 94003-1324",
    monthly_item_total: 25,
    one_time_item_total: 50,
    items_total: 150,
    vat: 2025,
    total: 3000,
  },
  {
    id: 202,
    date: "22-2-2024",
    price: 3025,
    status: "complete",
    order_items: [
      {
        id: 123,
        name: "Small Portable Storage",
        quantity: 1,
        price: 3000,
      },
    ],
    merchandise_items: [
      {
        id: 312,
        name: "Bubble Wrap",
        quantity: 1,
        price: 10,
      },
    ],
    shipping_address: "1226 University Dr Melno Park, CA 94003-1324",
    stored_address: "1226 University Dr Melno Park, CA 94003-1324",
    monthly_item_total: 25,
    one_time_item_total: 50,
    items_total: 150,
    vat: 2025,
    total: 3000,
  },
];

const ORDERS = [
  {
    id: 12345,
    date: "22-2-2024",
    price: 1289,
    status: "complete",
    order_items: [
      {
        id: 123,
        name: "Small Portable Storage",
        quantity: 1,
        price: 3000,
      },
      {
        id: 124,
        name: "Medium Portable Storage",
        quantity: 1,
        price: 4000,
      },
      {
        id: 125,
        name: "Large Portable Storage",
        quantity: 1,
        price: 5000,
      },
    ],
    merchandise_items: [
      {
        id: 312,
        name: "Bubble Wrap",
        quantity: 1,
        price: 10,
      },
    ],
    shipping_address: "1226 University Dr Melno Park, CA 94003-1324",
    stored_address: "1226 University Dr Melno Park, CA 94003-1324",
    monthly_item_total: 25,
    one_time_item_total: 50,
    items_total: 150,
    vat: 2025,
    total: 3000,
    active: true,
    pickup_coords: {
      latitude: 24.7787326,
      longitude: 67.0892942,
    },
    destination_coords: {
      latitude: 24.775786,
      longitude: 67.088993,
    },
    notes: "",
    survey_images: [],
    sign: "",
    unit: 3,
    client: {
      name: "Ahmad Bahsass",
      image: "",
    }
  },
  {
    id: 22345,
    date: "22-2-2024",
    price: 1289,
    status: "complete",
    order_items: [
      {
        id: 123,
        name: "Small Portable Storage",
        quantity: 1,
        price: 3000,
      },
    ],
    merchandise_items: [
      {
        id: 312,
        name: "Bubble Wrap",
        quantity: 1,
        price: 10,
      },
    ],
    shipping_address: "1226 University Dr Melno Park, CA 94003-1324",
    stored_address: "1226 University Dr Melno Park, CA 94003-1324",
    monthly_item_total: 25,
    one_time_item_total: 50,
    items_total: 150,
    vat: 2025,
    total: 3000,
    active: true,
    pickup_coords: {
      latitude: 24.7787326,
      longitude: 67.0892942,
    },
    destination_coords: {
      latitude: 24.775786,
      longitude: 67.088993,
    },
    notes: "",
    survey_images: ["/private/var/mobile/Containers/Data/Application/0C61E887-ED31-4F5F-BC79-2E51A492255E/tmp/ReactNative/826CD203-E141-44B6-A104-8D44D77727F3.png"],
    sign: "",
    unit: 3,
    client: {
      name: "Ahmad Bahsass",
      image: "",
    }
  },
  {
    id: 33333,
    date: "22-2-2024",
    price: 1289,
    status: "complete",
    order_items: [
      {
        id: 123,
        name: "Small Portable Storage",
        quantity: 1,
        price: 3000,
      },
    ],
    merchandise_items: [
      {
        id: 312,
        name: "Bubble Wrap",
        quantity: 1,
        price: 10,
      },
    ],
    shipping_address: "1226 University Dr Melno Park, CA 94003-1324",
    stored_address: "1226 University Dr Melno Park, CA 94003-1324",
    monthly_item_total: 25,
    one_time_item_total: 50,
    items_total: 150,
    vat: 2025,
    total: 3000,
    active: true,
    pickup_coords: {
      latitude: 24.7787326,
      longitude: 67.0892942,
    },
    destination_coords: {
      latitude: 24.775786,
      longitude: 67.088993,
    },
    notes: "",
    survey_images: [],
    sign: "",
    unit: 3,
    client: {
      name: "Ahmad Bahsass",
      image: "",
    }
  },
  {
    id: 44444,
    date: "22-2-2024",
    price: 1289,
    status: "complete",
    order_items: [
      {
        id: 123,
        name: "Small Portable Storage",
        quantity: 1,
        price: 3000,
      },
    ],
    merchandise_items: [
      {
        id: 312,
        name: "Bubble Wrap",
        quantity: 1,
        price: 10,
      },
    ],
    shipping_address: "1226 University Dr Melno Park, CA 94003-1324",
    stored_address: "1226 University Dr Melno Park, CA 94003-1324",
    monthly_item_total: 25,
    one_time_item_total: 50,
    items_total: 150,
    vat: 2025,
    total: 3000,
    active: true,
    pickup_coords: {
      latitude: 24.7787326,
      longitude: 67.0892942,
    },
    destination_coords: {
      latitude: 24.775786,
      longitude: 67.088993,
    },
    notes: "",
    survey_images: [],
    sign: "",
    unit: 3,
    client: {
      name: "Ahmad Bahsass",
      image: "",
    }
  },
  {
    id: 32345,
    date: "22-2-2024",
    price: 1289,
    status: "complete",
    order_items: [
      {
        id: 123,
        name: "Small Portable Storage",
        quantity: 1,
        price: 3000,
      },
    ],
    merchandise_items: [
      {
        id: 312,
        name: "Bubble Wrap",
        quantity: 1,
        price: 10,
      },
    ],
    shipping_address: "1226 University Dr Melno Park, CA 94003-1324",
    stored_address: "1226 University Dr Melno Park, CA 94003-1324",
    monthly_item_total: 25,
    one_time_item_total: 50,
    items_total: 150,
    vat: 2025,
    total: 3000,
    active: true,
    pickup_coords: {
      latitude: 24.7787326,
      longitude: 67.0892942,
    },
    destination_coords: {
      latitude: 24.775786,
      longitude: 67.088993,
    },
    notes: "",
    survey_images: [],
    sign: "",
    unit: 3,
    client: {
      name: "Ahmad Bahsass",
      image: "",
    }
  },
  {
    id: 42345,
    date: "22-2-2024",
    price: 1289,
    status: "on_the_way",
    order_items: [
      {
        id: 123,
        name: "Small Portable Storage",
        quantity: 1,
        price: 3000,
      },
    ],
    merchandise_items: [
      {
        id: 312,
        name: "Bubble Wrap",
        quantity: 1,
        price: 10,
      },
    ],
    shipping_address: "1226 University Dr Melno Park, CA 94003-1324",
    stored_address: "1226 University Dr Melno Park, CA 94003-1324",
    monthly_item_total: 25,
    one_time_item_total: 50,
    items_total: 150,
    vat: 2025,
    total: 3000,
    active: true,
    pickup_coords: {
      latitude: 24.7787326,
      longitude: 67.0892942,
    },
    destination_coords: {
      latitude: 24.775786,
      longitude: 67.088993,
    },
    notes: "",
    survey_images: [],
    sign: "",
    unit: 3,
    client: {
      name: "Ahmad Bahsass",
      image: "",
    }
  },
  {
    id: 52345,
    date: "22-2-2024",
    price: 1289,
    status: "on_the_way",
    order_items: [
      {
        id: 123,
        name: "Small Portable Storage",
        quantity: 1,
        price: 3000,
      },
    ],
    merchandise_items: [
      {
        id: 312,
        name: "Bubble Wrap",
        quantity: 1,
        price: 10,
      },
    ],
    shipping_address: "1226 University Dr Melno Park, CA 94003-1324",
    stored_address: "1226 University Dr Melno Park, CA 94003-1324",
    monthly_item_total: 25,
    one_time_item_total: 50,
    items_total: 150,
    vat: 2025,
    total: 3000,
    active: true,
    pickup_coords: {
      latitude: 24.7787326,
      longitude: 67.0892942,
    },
    destination_coords: {
      latitude: 24.775786,
      longitude: 67.088993,
    },
    notes: "",
    survey_images: [],
    sign: "",
    unit: 3,
    client: {
      name: "Ahmad Bahsass",
      image: "",
    }
  },
  {
    id: 62345,
    date: "22-2-2024",
    price: 1289,
    status: "on_the_way",
    order_items: [
      {
        id: 123,
        name: "Small Portable Storage",
        quantity: 1,
        price: 3000,
      },
    ],
    merchandise_items: [
      {
        id: 312,
        name: "Bubble Wrap",
        quantity: 1,
        price: 10,
      },
    ],
    shipping_address: "1226 University Dr Melno Park, CA 94003-1324",
    stored_address: "1226 University Dr Melno Park, CA 94003-1324",
    monthly_item_total: 25,
    one_time_item_total: 50,
    items_total: 150,
    vat: 2025,
    total: 3000,
    active: true,
    pickup_coords: {
      latitude: 24.7787326,
      longitude: 67.0892942,
    },
    destination_coords: {
      latitude: 24.775786,
      longitude: 67.088993,
    },
    notes: "",
    survey_images: [],
    sign: "",
    unit: 3,
    client: {
      name: "Ahmad Bahsass",
      image: "",
    }
  },
  {
    id: 323451,
    date: "22-2-2024",
    price: 1289,
    status: "complete",
    order_items: [
      {
        id: 123,
        name: "Small Portable Storage",
        quantity: 1,
        price: 3000,
      },
    ],
    merchandise_items: [
      {
        id: 312,
        name: "Bubble Wrap",
        quantity: 1,
        price: 10,
      },
    ],
    shipping_address: "1226 University Dr Melno Park, CA 94003-1324",
    stored_address: "1226 University Dr Melno Park, CA 94003-1324",
    monthly_item_total: 25,
    one_time_item_total: 50,
    items_total: 150,
    vat: 2025,
    total: 3000,
    active: true,
    pickup_coords: {
      latitude: 24.7787326,
      longitude: 67.0892942,
    },
    destination_coords: {
      latitude: 24.775786,
      longitude: 67.088993,
    },
    notes: "",
    survey_images: [],
    sign: "",
    unit: 3,
    client: {
      name: "Ahmad Bahsass",
      image: "",
    }
  },
  {
    id: 423452,
    date: "22-2-2024",
    price: 1289,
    status: "on_the_way",
    order_items: [
      {
        id: 123,
        name: "Small Portable Storage",
        quantity: 1,
        price: 3000,
      },
    ],
    merchandise_items: [
      {
        id: 312,
        name: "Bubble Wrap",
        quantity: 1,
        price: 10,
      },
    ],
    shipping_address: "1226 University Dr Melno Park, CA 94003-1324",
    stored_address: "1226 University Dr Melno Park, CA 94003-1324",
    monthly_item_total: 25,
    one_time_item_total: 50,
    items_total: 150,
    vat: 2025,
    total: 3000,
    active: true,
    pickup_coords: {
      latitude: 24.7787326,
      longitude: 67.0892942,
    },
    destination_coords: {
      latitude: 24.775786,
      longitude: 67.088993,
    },
    notes: "",
    survey_images: [],
    sign: "",
    unit: 3,
    client: {
      name: "Ahmad Bahsass",
      image: "",
    }
  },
  {
    id: 523453,
    date: "22-2-2024",
    price: 1289,
    status: "pending",
    order_items: [
      {
        id: 123,
        name: "Small Portable Storage",
        quantity: 1,
        price: 3000,
      },
    ],
    merchandise_items: [
      {
        id: 312,
        name: "Bubble Wrap",
        quantity: 1,
        price: 10,
      },
    ],
    shipping_address: "1226 University Dr Melno Park, CA 94003-1324",
    stored_address: "1226 University Dr Melno Park, CA 94003-1324",
    monthly_item_total: 25,
    one_time_item_total: 50,
    items_total: 150,
    vat: 2025,
    total: 3000,
    active: false,
    pickup_coords: {
      latitude: 24.7787326,
      longitude: 67.0892942,
    },
    destination_coords: {
      latitude: 24.775786,
      longitude: 67.088993,
    },
    notes: "",
    survey_images: [],
    sign: "",
    unit: 3,
    client: {
      name: "Ahmad Bahsass",
      image: "",
    }
  },
  {
    id: 623454,
    date: "22-2-2024",
    price: 1289,
    status: "pending",
    order_items: [
      {
        id: 123,
        name: "Small Portable Storage",
        quantity: 1,
        price: 3000,
      },
    ],
    merchandise_items: [
      {
        id: 312,
        name: "Bubble Wrap",
        quantity: 1,
        price: 10,
      },
    ],
    shipping_address: "1226 University Dr Melno Park, CA 94003-1324",
    stored_address: "1226 University Dr Melno Park, CA 94003-1324",
    monthly_item_total: 25,
    one_time_item_total: 50,
    items_total: 150,
    vat: 2025,
    total: 3000,
    active: false,
    pickup_coords: {
      latitude: 24.7787326,
      longitude: 67.0892942,
    },
    destination_coords: {
      latitude: 24.775786,
      longitude: 67.088993,
    },
    notes: "",
    survey_images: [],
    sign: "",
    unit: 3,
    client: {
      name: "Ahmad Bahsass",
      image: "",
    }
  },
];

// Simple API Endpoint
app.post("/v1/auth/get-otp", (req, res) => {
  res.json({ success: true });
});

app.post("/v1/auth/verify-otp", (req, res) => {
  console.log(req.body);
  const { otp } = req.body;

  console.log(otp);
  res.json({
    success: true,
    data: {
      isNew: otp == 123456,
    },
  });
});

app.post("/v1/auth/sign-up", (req, res) => {
  res.json({ success: true });
});

app.post("/v1/order/verify", (req, res) => {
  console.log(req.body);
  const { otp } = req.body;

  console.log(otp);
  res.json({
    success: true,
    data: {
      verified: otp == 123456,
    },
  });
});

app.get("/v1/units", (req, res) => {
  res.json({
    success: true,
    data: UNITS,
  });
});

app.get("/v1/units/:id", (req, res) => {
  const id = req.params.id;

  console.log(id);

  const unit = UNITS.find((unit) => unit.id == id);

  res.json({
    success: Boolean(unit),
    data: unit || null,
  });
});

app.get("/v1/payment/pending", (req, res) => {
  const pendingPayment = PAYMENTS.filter(
    (payment) => payment.status === "pending"
  );

  res.json({
    success: true,
    data: pendingPayment,
  });
});

app.get("/v1/payment/complete", (req, res) => {
  const completePayment = PAYMENTS.filter(
    (payment) => payment.status === "complete"
  );

  res.json({
    success: true,
    data: completePayment,
  });
});

app.get("/v1/payment/:id", (req, res) => {
  const id = req.params.id;

  console.log(id);

  const payment = PAYMENTS.find((payment) => payment.id == id);

  res.json({
    success: true,
    data: payment,
  });
});

app.get("/v1/order/complete", (req, res) => {
  const complete_orders = ORDERS.filter((order) => order.status === "complete");

  res.json({
    success: true,
    data: complete_orders,
  });
});

app.get("/v1/order/recent", (req, res) => {
  res.json({
    success: true,
    data: ORDERS,
  });
});

app.get("/v1/order/:id", (req, res) => {
  const id = req.params.id;

  console.log(id);

  const order = ORDERS.find((order) => order.id == id);

  res.json({
    success: true,
    data: order,
  });
});

app.get("/v1/driver/order/active", (req, res) => {
  const orders = ORDERS.filter((order) => order.active);

  res.json({
    success: true,
    data: orders,
  });
});

app.get("/v1/driver/order/inactive", (req, res) => {
  const orders = ORDERS.filter((order) => !order.active);

  res.json({
    success: true,
    data: orders,
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
