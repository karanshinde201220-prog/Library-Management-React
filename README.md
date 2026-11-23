# Libra — MERN Library Management System

A local library management system with separate administrator and member portals, built with React + Vite, Express, MongoDB/Mongoose and JWT authentication.

## Roles and permissions

### Member account
- Register with name, email, username and password (minimum 8 characters).
- Sign in using username or email.
- View personal library membership details.
- View all books issued to their account, issue dates, due dates, quantities and return status.
- View recorded fines and live estimates for overdue books that have not yet been returned.
- Refresh or automatically refresh account information.
- Members cannot issue books, return books, alter fines, manage the catalogue or view another member's records.

### Administrator account
- Dashboard, catalogue and member management.
- Issue books to registered members and record returns.
- View all loans and fines, record fine payment or waiver.
- Reservations, reports, settings, audit log and backup.
- Only an administrator can issue a book or process a return.

## Requirements
- Node.js 18+
- MongoDB running locally on port 27017

## Setup
1. Copy `server/.env.example` to `server/.env` and set a strong `JWT_SECRET`.
2. From the project root run `npm install`.
3. Run `npm run seed` to create/update the administrator and default settings. This seed script preserves existing library data.
4. Run `npm run dev`.
5. Open `http://localhost:5173`.

Administrator demo login: `admin` / `admin123`.

Members use **Create account** on the login screen. Registration automatically creates a library member record, but it does not issue a book. The member must visit the library and the administrator issues the book from **Issue / Return** using that member's record.

## Database
Default MongoDB URI: `mongodb://127.0.0.1:27017/library_management`

## Fine calculation
The configured `finePerDay` setting is used for overdue estimates. While a book is still issued, the member portal shows an estimated amount. When the administrator records its return, the system records the final fine. Fine payments and waivers are handled by the administrator.

## Production build
Run `npm run build`, then `npm start`.

## Important behavior
- A member account is linked to one `Member` record using an internal account reference.
- The member portal API always looks up the authenticated account's linked member record; clients cannot submit another member ID to read another person's loans or fines.
- All book issue and return endpoints require an administrator JWT. Member accounts receive HTTP 403 if they try to call those endpoints directly.
"# Library-Management" 
"# Library-Management" 
