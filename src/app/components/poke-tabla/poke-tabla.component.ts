import { AfterViewInit , Component, ViewChild, OnInit} from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router,  } from '@angular/router';
import {MatSort} from '@angular/material/sort';
import { PokeDetalleComponent } from './../poke-detalle/poke-detalle.component';

@Component({
  selector: 'app-poke-tabla',
  templateUrl: './poke-tabla.component.html',
  styleUrls: ['./poke-tabla.component.scss']
})
export class PokeTablaComponent implements OnInit {
  //Columnas que se muestran de la tabla de angular material
  displayedColumns: string[] = ['position', 'image', 'name'];
  data: any[] = [];
  dataSource = new MatTableDataSource<any>(this.data);
  public limit: number = 0;
  public pokelimit: any[] = [];
  public ultimo: number;
  public id: number;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @ViewChild(PokeDetalleComponent) pokeDetalle: PokeDetalleComponent;

  pokemons = [];

  constructor(private pokemonService: PokemonService, private router: Router) { }

  ngOnInit() {
    this.getPokelimit();
  }
  ngAfterViewInit() {
  }
  getPokelimit(){
    this.pokemonService.getPokelimit(this.limit).subscribe(
      res =>{
        this.pokelimit.push(res.count);
        this.ultimo = this.pokelimit[0];
        let pokemonData;
        for (let i = 1; i <= this.ultimo; i++) {
          this.pokemonService.getPokemons(i).subscribe(
            res => {
              pokemonData = {
                position: i,
                image: res.sprites.front_default,
                name: res.name
              };
              //ponemos la data que viene del servicio en un arreglo
              this.data.push(pokemonData);

              this.dataSource = new MatTableDataSource<any>(this.data);
              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;
            },
            err => {
              console.log(err);
            }
          );
        }

      },
      err => {
        console.log(err);
      }
    );

  }

  //Filtro para el paginador
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

 //Obtiene elemento seleccionado
  getRow(row){
    this.id = row.position;
    this.pokeDetalle.getPokemon(this.id);

  }

}
