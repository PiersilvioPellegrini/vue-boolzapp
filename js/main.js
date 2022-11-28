const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      selectedUser: null,
      searchUser:"",
  
      dateTime : luxon.DateTime,
      // array di appoggio che prende il valore di input del messaggio
      newMessage: [
        {
          message: "",
        },
      ],

      usersList: [
        {
          name: "Michele",
          avatar: "_1",
          visible: true,

          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Hai portato a spasso il cane?",
              // COMPUTER
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Ricordati di dargli da mangiare",
              status: "sent",
            },
            {
              date: "10/01/2020 16:15:22",
              message: "Tutto fatto!",
              status: "received",
            },
          ],
        },
        {
          name: "Fabio",
          avatar: "_2",
          visible: true,

          messages: [
            {
              date: "20/03/2020 16:30:00",
              message: "Ciao come stai?",
              status: "sent",
            },
            {
              date: "20/03/2020 16:30:55",
              message: "Bene grazie! Stasera ci vediamo?",
              status: "received",
            },
            {
              date: "20/03/2020 16:35:00",
              message: "Mi piacerebbe ma devo andare a fare la spesa.",
              status: "received",
            },
          ],
        },
        {
          name: "Samuele",
          avatar: "_3",
          visible: true,
          messages: [
            {
              date: "28/03/2020 10:10:40",
              message: "La Marianna va in campagna",
              status: "received",
            },
            {
              date: "28/03/2020 10:20:10",
              message: "Sicuro di non aver sbagliato chat?",
              status: "sent",
            },
            {
              date: "28/03/2020 16:15:22",
              message: "Ah scusa!",
              status: "received",
            },
          ],
        },
        {
          name: "Luisa",
          avatar: "_4",
          visible: true,

          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Lo sai che ha aperto una nuova pizzeria?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Si, ma preferirei andare al cinema",
              status: "received",
            },
          ],
        },
      ],
    };
  },
  methods: {
    //  funzione per aggiungere nuovo messaggio all'array dei messaggi

    sentNewMessage() {
      // entro dentro l'elemento utente in cui mi trovo
      this.selectedUser.messages.push({
        date: this.dateTime.now().toFormat('dd/MM/yyyy HH:mm:ss'),
        // assegno il valore che ha preso l'array di appoggio come input
        message: this.newMessage.message,
        status: "received",
      });
      // clean input
      this.newMessage.message = "";
      // RICHIAMO LA FUNZIONE CON IL TIMER
      setTimeout(this.sendReplywithTimer, 1000);
    },
    // messaggio automatico doppo 3 secondi
    sendReplywithTimer() {
      // creo un nuovo messaggio
      this.selectedUser.messages.push({
        date: this.dateTime.now().toFormat('dd/MM/yyyy HH:mm:ss'),
        // imposto risposta
        message: "ok",
        status: "sent",
      });
    },

    searchUser(){
      
      
    }
  },

  // assegno alla variabile SelectedUser il valore di indice = 0 (usersList)
  beforeMount() {
    this.selectedUser = this.usersList[0];
  },
}).mount("#app");
