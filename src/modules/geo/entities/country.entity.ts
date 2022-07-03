import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'countries' })
export class Country {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  code: string;

  @Column()
  native: string;

  @Column()
  phone: string;

  @Column()
  continent: string;

  @Column()
  capital: string;

  @Column()
  currencies: string;

  @Column()
  languages: string;

  @Column()
  main_cities: string;

  @Column()
  parent_country: string;
}
