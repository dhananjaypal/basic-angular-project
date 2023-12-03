# Creating a new module--
  type command ng generate module myNewModule
  add MyNewModuleModule in imports array of app.component.ts file

# Creating new component in newly created myNewModule
   type command ng g c my-new-component
   add MyNewComponentComponent in imports array of app.component.ts file
   add <app-my-new-component></app-my-new-component> in any html file where you want to include this new component.
   For Exp: app.component.html


