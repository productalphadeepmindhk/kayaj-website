-- Create products table
CREATE TABLE public.products (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name_en text NOT NULL,
  description_zh text NOT NULL,
  price numeric,
  image_url text,
  is_core_product boolean DEFAULT false,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Create policies
-- Allow public read access
CREATE POLICY "Public profiles are viewable by everyone."
  ON public.products FOR SELECT
  USING ( true );

-- Allow authenticated users (admin) to insert/update/delete
CREATE POLICY "Admins can insert products."
  ON public.products FOR INSERT
  WITH CHECK ( auth.role() = 'authenticated' );

CREATE POLICY "Admins can update products."
  ON public.products FOR UPDATE
  USING ( auth.role() = 'authenticated' );

CREATE POLICY "Admins can delete products."
  ON public.products FOR DELETE
  USING ( auth.role() = 'authenticated' );

-- Note: For Image Storage, please go to the "Storage" section in your Supabase dashboard
-- and create a new bucket named "product-images" and make it public.
