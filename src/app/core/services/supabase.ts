import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    const supabaseUrl = 'sb_publishable_7PfhGJsVSUVCqJg4UiV4QQ_2LfS4EsS';
    const supabaseKey = 'https://zirtopkgdyloqemfzicz.supabase.co/rest/v1/';
    this.supabase = createClient(supabaseUrl, supabaseKey);
  }

  get client() {
    return this.supabase;
  }
}