import React from 'react'
import './MainMenu.css';

export const Table = () => (

<table class="table table-striped">
  <thead>
    <h1 class="text-center" ><p class="font-weight-bold">Classificação</p> </h1> 
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nome</th>
      <th scope="col">Competição</th>
      <th scope="col">Medalha</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Antonio</td>
      <td>Natação</td>
      <td>Ouro</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Fred</td>
      <td>Hipismo</td>
      <td>Broze</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Fernanda</td>
      <td>Judo</td>
      <td>Ouro</td>
    </tr>
  </tbody>
</table>
)