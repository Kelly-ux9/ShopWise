# ShopWise

ShopWise is a presentation-ready marketplace concept connecting African sellers with buyers globally.

## Important security note
The browser uses the Supabase public `anon` key. That key is intended for frontend use, but database Row Level Security (RLS) must be enabled and correctly configured in Supabase. Never place a Supabase `service_role` key or other secret in this repository.

## Main demo flow
Home → Marketplace → Product details → Login/Sign up → Dashboard

The current marketplace demo intentionally does not create database orders from arbitrary hard-coded buyer/seller IDs. Real order creation should be added only after the database schema and RLS policies are verified.
