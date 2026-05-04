# MediCore API Endpoint Documentation

This document provides a comprehensive list of all API endpoints available in the MediCore Pharmacy Management System.

## Base URL
The API base URL is typically: `http://localhost:5001/api/v1` (for development)

---

## 1. Authentication (`/auth`)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| POST | `/auth/register` | Register a new staff member |
| POST | `/auth/login` | Sign in and receive access/refresh tokens |
| POST | `/auth/refresh` | Obtain a new access token using a refresh token |
| POST | `/auth/logout` | Invalidate the current session |
| GET | `/auth/me` | Get the currently authenticated user's profile |

---

## 2. Dashboard (`/dashboard`)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| GET | `/dashboard/activity` | Get recent system activities |
| GET | `/dashboard/fast-moving` | Get list of fast-moving medicines |
| GET | `/dashboard/summary` | Get high-level inventory and sales summary |
| GET | `/dashboard/` | Get full dashboard state |

---

## 3. Medicines Catalog (`/medicines`)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| GET | `/medicines/duplicate-check` | Check for potential duplicate medicine entries |
| GET | `/medicines/autocomplete` | Search medicines with autocomplete suggestions |
| GET | `/medicines/generic-names/autocomplete` | Autocomplete for generic names |
| GET | `/medicines/expiry/alerts` | Get upcoming medicine expiry alerts |
| GET | `/medicines/barcode/:barcode` | Find a medicine by its barcode |
| GET | `/medicines/` | List all medicines (supports filtering/pagination) |
| GET | `/medicines/:id` | Get detailed information for a specific medicine |
| POST | `/medicines/` | Create a new medicine entry |
| PUT | `/medicines/:id` | Update an existing medicine entry |
| PATCH | `/medicines/:id` | Partially update a medicine entry |
| POST | `/medicines/:id/restore` | Restore a soft-deleted medicine |
| DELETE | `/medicines/:id` | Soft-delete a medicine record |

---

## 4. Inventory & Stock Control (`/inventory`)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| GET | `/inventory/movements` | List stock movement history |
| GET | `/inventory/low-stock` | Get alerts for medicines with low stock |
| GET | `/inventory/expiry` | Detailed view of stock by expiry date |
| POST | `/inventory/adjust` | Manually adjust stock levels (damage, correction, etc.) |
| GET | `/inventory/medicine/:medicineId` | Get all stock batches for a specific medicine |
| GET | `/inventory/stocks` | List all current stock batches |
| POST | `/inventory/stocks` | Add a new stock batch |
| PATCH | `/inventory/stocks/:id` | Update an existing stock batch |
| GET | `/inventory/` | General inventory listing |
| GET | `/inventory/:id` | Get details of a specific inventory batch |

---

## 5. Sales & Invoicing (`/sales`)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| GET | `/sales/history` | List all past sales and invoices |
| GET | `/sales/invoices/:id` | Get a specific invoice by ID |
| GET | `/sales/search-medicines` | POS-specific medicine search |
| GET | `/sales/barcode/:barcode` | POS-specific barcode lookup |
| POST | `/sales/create` | Process a new sale and create an invoice |
| POST | `/sales/:id/refund` | Process a refund for an existing sale |

---

## 6. Suppliers (`/suppliers`)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| GET | `/suppliers/` | List all registered suppliers |
| GET | `/suppliers/:id` | Get supplier details |
| POST | `/suppliers/` | Register a new supplier |
| PUT | `/suppliers/:id` | Update supplier information |
| DELETE | `/suppliers/:id` | Remove a supplier |

---

## 7. Purchases & Procurement (`/purchases`)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| GET | `/purchases/` | List all purchase orders |
| GET | `/purchases/:id` | Get details of a purchase order |
| POST | `/purchases/` | Create a new purchase order |
| POST | `/purchases/:id/receive` | Record receipt of items from a PO |

---

## 8. Reports & Analytics (`/reports`)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| GET | `/reports/sales` | Generate sales performance reports |
| GET | `/reports/stock` | Generate inventory valuation and stock reports |
| GET | `/reports/expiry` | Generate expiry forecast reports |
| GET | `/reports/purchases` | Generate procurement analysis reports |

---

## 9. Users & Access Management (`/users`)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| GET | `/users/` | List all staff members |
| PATCH | `/users/:id/status` | Enable or disable a user account |
| GET | `/users/:id` | Get user details |
| PATCH | `/users/:id` | Update user role or profile |

---

## 10. Reviews & Feedback (`/reviews`)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| GET | `/reviews/` | List all reviews |
| POST | `/reviews/` | Add a new review/note |
| PATCH | `/reviews/:id` | Update a review |
| DELETE | `/reviews/:id` | Archive a review |

---

## 11. File Uploads (`/uploads`)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| POST | `/uploads/` | Upload a file (Base64) |
| GET | `/uploads/:id/meta` | Get metadata for an uploaded file |
| GET | `/uploads/:id/download` | Download a specific file |
| DELETE | `/uploads/:id` | Remove an uploaded file |
