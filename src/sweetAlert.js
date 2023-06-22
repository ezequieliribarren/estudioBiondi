import Swal from 'sweetalert2';

function serv () {
    
let serv1 = document.querySelector ('.serv1')
let serv2 = document.querySelector ('.serv2')
let serv3 = document.querySelector ('.serv3')
let serv4 = document.querySelector ('.serv4')
let serv5 = document.querySelector ('.serv5')
let serv6 = document.querySelector ('.serv6')

serv1.onclick = () => {
    Swal.fire({
        html: '<div class="sweet"> <h3 class="titleSweet">¿Qué es el sindrome de ulices?</h3> <p class= "pSweet">Conocido también como síndrome de estrés crónico y múltiple.Tiene que ver con un fuerte malestar que viven algunas personas que migran, por los cambios y el pasaje de un lugar que les es familiar a un espacio extranjero. <br><br> El síndrome de Ulises va más allá de un duelo migratorio, dado que al duelo esperado y normal, se le suma la vivencia subjetiva de la persona que se siente sobrepasada por la situación y sin recursos para afrontarla. <br><br> Si sentís que los cambios en tu nueva vida son más de lo que podés procesar, no dudes en buscar ayuda psicológica. Muchas veces hablar y ordenar la cabeza es todo lo que se necesita. </p> </div>',
width: '80%',
        backdrop:"true",
        confirmButtonText: 'Volver',
        confirmButtonColor: '#498563',
      })
}

serv2.onclick = () => {
    Swal.fire({
        html: '<div class="sweet"> <h3 class="titleSweet">El Lado B de serv</h3> <p class= "pSweet">En el espacio de terapia muchas veces se suele escuchar que no todo es color de rosa al vivir en un nuevo país. Lo que conocías y era familiar, ya no está presente en el día a día y muchas veces se empieza a sentir pesado y con cierta angustia. <br><br> Esto puede disparar preguntas del estilo “¿habré hecho lo correcto?” o “quizá me equivoqué y esto no es para mí”. Lo más importante al comenzar un proceso migratorio, es no perder de vista que es UN PROCESO. Por lo tanto necesita TIEMPO, ADAPTACIÓN y PACIENCIA.</p> </div>',
width: '80%',
        backdrop:"true",
        confirmButtonText: 'Volver',
        confirmButtonColor: '#498563',
      })
    }

    serv3.onclick = () => {
        Swal.fire({
            html: '<div class="sweet"> <h3 class="titleSweet">Los jueces migratorios</h3> <p class= "pSweet">¿Alguna vez te sentiste juzgado por otros - o por vos mismo - sobre las decisiones que tomaste en tu vida?. Quiero contarte que cuando una persona decide comenzar a vivir en otro lugar, no sólo hay muchas decisiones importantes que tiene que tomar, sino que lleva la carga social (y muchas veces personal) de que lo que decida debe ser ”LO MEJOR”. <br><br> Pero para poder saber qué es lo mejor para vos, primero tenés que experimentar y muchas veces eso implica equivocarte o desilusionarte. Esa información que obtenés de la experiencia es súper importante, porque te marca el camino a seguir. ¡No tengas miedo a fallar! La experiencia es tu mejor aliada en el proceso de migración, porque te ayuda a construir tu camino personal.</p></div>',
    width: '80%',
            backdrop:"true",
            confirmButtonText: 'Volver',
            confirmButtonColor: '#498563',
          })
        }

        serv4.onclick = () => {
            Swal.fire({
                html: '<div class="sweet"> <h3 class="titleSweet">Expectativas Vs Realidad</h3><p class= "pSweet">¿Te pasó que, cuando no se logran ciertas cosas que habías proyectado, te desanimas pensando que no tenes la capacidad o que no sos bueno para eso?. <br><br> Quizá lo que no frenaste a analizar es que muchas veces la vara está tan alta que las expectativas proyectadas ya son inalcanzables desde el inicio, dejándote en un fracaso seguro. Cuando para esto, la realidad te devuelve una imposibilidad, pero no por falta de capacidad, sino porque tenes expectativas más altas de lo que es posible para vos. <br><br> “¡Lo mejor es enemigo de lo bueno!” decía mi abuela. No sea que por buscar lo mejor te pierdas de lo posible para este momento. A veces empezar por “lo bueno” es “lo mejor” que podés hacer.</p> </div>',
        width: '80%',
                backdrop:"true",
                confirmButtonText: 'Volver',
                confirmButtonColor: '#498563',
              })
            }

            serv5.onclick = () => {
                Swal.fire({
                    html: '<div class="sweet"> <h3 class="titleSweet">El choque cultural</h3> <p class= "pSweet">Cuando hablamos de choque cultural nos referimos al impacto que le genera a una persona pasar de una cultura familiar a una desconocida. <br><br> Esto puede provocar ansiedad o sentimientos como incertidumbre y confusión. Al mismo tiempo, el esfuerzo que conlleva la adaptación - mucho más si hay que comprender otro idioma- requiere de un gasto de energía que puede terminar en agotamiento mental y físico. <br><br> Si te sentís así, recordá que el cerebro es como una batería, todo ese procesamiento lo descarga y necesita momentos de descanso para no sobrepasarse. Bajar las exigencias es una buena forma de ayudar a tu mente. Cuando sientas que el choque cultural te abruma, recordá que no naciste en ese país, pretender no ser extranjero es una exigencia poco amable con vos.</p> </div>',
            width: '80%',
                    backdrop:"true",
                    confirmButtonText: 'Volver',
                    confirmButtonColor: '#498563',
                  })
                }

                serv6.onclick = () => {
                    Swal.fire({
                        html: '<div class="sweet"> <h3 class="titleSweet">El duelo de los que se quedan</h3> <p class= "pSweet">Muchas miradas se posan en aquellos que se van, pero ¿qué pasa con los que se quedan?. <br><br> Una vez una paciente me dijo: “Yo me sentía sola por estar fuera de mi país, hasta que hablé con un amigo que estaba allí y me dijo que él también se sentía sólo porque la mayoría se había ido. Nunca pensé que la gente que estaba en mi país podía sentirse igual de sola que yo, que me había ido. Ellos también sentían la pérdida.” <br><br> El vacío que deja alguien querido - en lo cotidiano, en las fechas especiales - es difícil de procesar. No se trata de llenarlo, sino de convivir con él. Las dos partes sufren un cambio y será necesario un proceso amoroso y paciente para que los vínculos, puedan seguirse construyendo, a pesar y a través de la nueva realidad.</p> </div>',
                width: '80%',
                        backdrop:"true",
                        confirmButtonText: 'Volver',
                        confirmButtonColor: '#498563',
                      })
                    }
}

serv ();