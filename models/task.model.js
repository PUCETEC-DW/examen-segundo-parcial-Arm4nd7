let taks = []
let idCero = 1
export class TaskModel {

   deleteOne(id) {
    const task = delete(id);
    task.pop(task)
    return task;
  }

   postOne() {
    let idMasUno =+ idCero
    const task =  post({
      id: idMasUno,
      title: "hacer post",
      description: "creando modelos",
      completed: true,
      priority: 4,
    });
    const cosolaPrueba = task.push(taks)
    console.log(cosolaPrueba)
    return task
  }
  
  

}
