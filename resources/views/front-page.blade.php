@extends('layouts.app')

@section('content')
  @while(have_posts()) @php the_post() @endphp
    @include('partials.page-header')
    @include('partials.content-page')
  @endwhile

  <h1 id="gg">Ariel Pogi</h1>

  <input type="text" id="asfd" value="" name="">

  <div>sasda</div>

  <div>
  	<span id="arielPogi" style="color: red;"><% message %></span>
  	<span id="editedText" style="color: green;">Not yet Edited</span>
  </div>


  <input style="color: red;" type="text" id="edit_vue" value="" name="">

  <div>
  	<del>dsad</del>
  </div>

  <div id="app-2">
  	<span v-bind:title = "message">
  		Hover your mouse over me for a few seconds to see my dynamically bound title
  	</span>
  </div>

  <div id="app-3">
  	<span v-if = "message">
  		Now you see me
  	</span>

  </div>
  
  	<button id="app-4" v-on:click = "hideApp3">Now you don't</button>
    <br>

  <div id="app-5">
    <input id="reverseMessageInput" type="text" v-on:keyup = "reverseMessageFunc" /><br>
    <span>Reverse: </span><span id="reverseMessageOutput"></span><br>
    <!-- <button id="reverseMessageOutput" v-on:click = "reverseMessageFunc"></button> -->

  </div>

@endsection
