var message = require('./lib/onmessage');
var reactionadd = require('./lib/onreactionadd');
var reactionremove = require('./lib/onreactionremove');
var MemberAdd = require('./lib/onMemberAdd');
var MemberRemove = require('./lib/onMemberRemove');

//________________________ready_________________________________________________________________________________________
/**BOT READY
 */
exports.dsready = function () {

    console.log('discord ready')
};
//______________________________________________________________________________________________________________________
//________________________message_______________________________________________________________________________________
/**ON MESSAGE
 *
 * @param msg - объект сообщения
 */
exports.dismessage = function (msg) {
    message.command(msg)
};
/**ИВЕНТ ПРИ УДАЛЕНИИ СООБЩЕНИЯ
 *
 * @param msg - объект сообщения
 */
exports.dismessageDelete = function (msg) {

};
/**ИВЕНТ ПРИ МАССОВОМ УДАЛЕНИИ СООБЩЕНИЙ
 *
 * @param msgMap - коллекция сообщений
 */
exports.dismessageDeleteBulk = function (msgMap) {

};

/**ИВЕНТ ПРИ ОБНОВЛЕНИИ СООБЩЕНИЯ
 *
 * @param oldMsg - объект старой версии сообщения
 * @param newMsg - объект новой версии сообщения
 */
exports.dismessageUpdate = function (oldMsg, newMsg) {

};

/**ИВЕНТ ПРИ НАБОРЕ СООБЩЕНИЯ
 *
 * @param channel - объект канала
 * @param user - объект пользователя
 */
exports.distypingStart = function (channel, user) {

};
/**ИВЕНТ ПРИ ЗАВЕРШЕНИИ НАБОРА СООБЩЕНИЯ
 *
 * @param channel - объект канала
 * @param user - объект пользователя
 */
exports.distypingStop = function (channel, user) {

};
//______________________________________________________________________________________________________________________
//________________________reaction______________________________________________________________________________________
/**ON REACTION ADD
 *
 * @param emj - объект реакции
 * @param user - добавивший реакцию пользователь
 */
exports.disaddreaction = function (emj, user) {
    reactionadd.command(emj, user)
};
/**ON REACTION REMOVE
 *
 * @param emj - объект реакции
 * @param user - добавивший реакцию пользователь
 */
exports.disremovereaction = function (emj, user) {
    reactionremove.command(emj, user)
};

/**ИВЕНТ ПРИ УДАЛЕНИИ ВСЕХ РЕАКЦИЙ
 *
 * @param msg - объект сообщения
 */
exports.dismessageReactionRemoveAll = function (msg) {

};
//______________________________________________________________________________________________________________________
//______________________________channel_________________________________________________________________________________
/**ON CREATE CHANNEL
 *
 * @param channel - общьект текстового чата
 */

exports.dischannelcreate = function (channel) {

};
/**ON DELETE CHANNEL
 *
 * @param channel - общьект текстового чата
 */
exports.dischanneldelete = function (channel) {

};

/**ON PIN UPDATE CHANNEL - кто бы знал что енто значит
 *
 * @param channel - общьект текстового чата
 * @param time - дата и время обновления
 */
exports.dischannelpinsupdate = function (channel, time) {

};
/** ОБНОВЛЕНИЕ ТЕКСТОВОГО ЧАТА
 *
 * @param oldchannel - объект старой версии чата
 * @param newchannel - объект новой версии чата
 */
exports.dischannelupdate = function (oldchannel, newchannel) {

};
/**ИВЕНТ ПРИ ДЕЙСТВИЯХ В ВОЙС ЧАТЕ
 *
 * @param oldMember - старый объект члена сервера
 * @param newMember - новый объект члена сервера
 */
exports.disvoiceStateUpdate = function (oldMember, newMember) {

};
//______________________________________________________________________________________________________________________
//______________________bot sattings____________________________________________________________________________________
/**ОБНОВЛЕНИЕ СЕРВЕРНЫХ НАСТРОЕК БОТА
 *
 * @param satting - объект настроек
 */
exports.disclientuserguildsettingsupdate = function (satting) {

};
/**ОБНОВЛЕНИЕ НАСТРОЕК АККАУНТА БОТА
 *
 * @param satting - объект настроек
 */
exports.disclientusersettingsupdate = function (satting) {

};
/**ИВЕНТ ПРИ ПОДКЛЮЧЕНИИ К СЕРВЕРУ
 *
 * @param server - объект сервера
 */
exports.disguildCreate = function (server) {

};
/**ИВЕНТ ПРИ ВЫХОДЕ С СЕРВЕРА
 *
 * @param server - объект сервера
 */
exports.disguildDelete = function (server) {

};
/**ИВЕНТ ПРИ ОБНОВЛЕНИИ ЗАМЕТКИ
 *
 * @param user - объект пользователя
 * @param oldNote - объект старой заметки
 * @param newNote - объект новой заметки
 */
exports.disuserNoteUpdate = function (user, oldNote, newNote) {

};
//______________________________________________________________________________________________________________________
//_________________________emoji________________________________________________________________________________________
/**ИВЕНТ ПРИ СОЗДАНИИ ЭМОДЖИ
 *
 * @param emj - объект эмоджи
 */
exports.disemojicreate = function (emj) {

};
/**ИВЕНТ ПРИ УДАЛЕНИИ ЭМОДЖИ
 *
 * @param emj - объект эмоджи
 */
exports.disemojidelete = function (emj) {

};
/**ИВЕНТ ПРИ ОБНОВЛЕНИИ ЭМОДЖИ
 *
 * @param oldEmj - объект старой версии эмоджи
 * @param newEmj - объект новой версии эмоджи
 */
exports.disemojiupdate = function (oldEmj, newEmj) {

};
//______________________________________________________________________________________________________________________
//_________________________________guild________________________________________________________________________________
/**ИВЕНТ ПРИ БАНЕ НА СЕРВЕРЕ
 *
 * @param server - объект сервера
 * @param user - объект забаненного бользователя
 */
exports.disguildbanadd = function (server, user) {

};
/**ИВЕНТ ПРИ РАЗБАНЕ НА СЕРВЕРЕ
 *
 * @param server - объект сервера
 * @param user - объект разбаненного пользователя
 */
exports.disguildbanremove = function (server, user) {

};
/**ИВЕНТ ПРИ ПОЯВЛЕНИИ НОВОГО ПОЛЬЗОВАТЕЛЯ НА СЕРВЕРЕ
 *
 * @param guild - объект сервера
 */
exports.disguildMemberAdd = function (guild) {
    MemberAdd.command(guild)
};
/**ПОЛЬЗОВТЕЛЬ СТАНОВИТСЯ ДОСТУПНЫМ В БОЛЬШОЙ ГИЛЬДИИ ? ЩИТО ?
 *
 * @param user - объект пользователя
 */
exports.disguildMemberAvailable = function (user) {

};
/**ИВЕНТ ПРИ ЛИВЕ ПОЛЬЗОВАТЕЛЯ С СЕРВЕРА
 *
 * @param user -  объект пользователя
 */
exports.disguildMemberRemove = function (user) {
    MemberRemove.commands(user);
};
/**КУСОК ЧЛЕНОВ ? МОЯ ФАНТАЗИЯ ОТКАЗЫВАЕТСЯ ВОСПРИНИМАТЬ ЭТО НОРМАЛЬНО!
 *
 * @param members - коллекция членов сервера
 * @param server - объект сервера
 */
exports.disguildMembersChunk = function (members, server) {

};
/**ИВЕНТ ПРИ РАЗГОВОРЕ ПОЛЬЗОВАТЕЛЯ //БОТ ДОЛЖЕН БЫТЬ В ВОЙС ЧАТЕ//
 *
 * @param member - объект пользователя
 * @param speaking - говорит или нет
 */
exports.disguildMemberSpeaking = function (member, speaking) {
};
/**ИВЕНТ ПРИ ОБНОВЛЕНИИ ЧЛЕНА СЕРВЕРА
 *
 * @param oldMember - объект старой версии пользователя
 * @param newMember - объект новой версии пользовотеля
 */
exports.disguildMemberUpdate = function (oldMember, newMember) {

};
/**ИВЕНТ ЕСЛИ СЕРВЕР НЕДОСТУПЕН
 *
 * @param server - собъект сервера
 */
exports.disguildUnavailable = function (server) {

};
/**ИВЕНТ ПРИ ОБНОВЛЕНИИ СЕРВЕРА
 *
 * @param oldServer - объект старовй версии сервера
 * @param newServer - объект новой версии сервера
 */
exports.disguildUpdate = function (oldServer, newServer) {

};

/**ИВЕНТ ПРИ ОБНОВЛЕНИИ СТАТУСА ЧЛЕНА СЕРВЕРА
 *
 * @param oldMember - объект старой версии пользователя
 * @param newMember - объект новой версии пользователя
 */
exports.dispresenceUpdate = function (oldMember, newMember) {
};
/**ИВЕНТ ПРИ ОБНОВЛЕНИИ ПОЛЬЗОВАТЕЛЯ
 *
 * @param oldUser - старый объект пользователя
 * @param newUser - новый объект пользователя
 */
exports.disuserUpdate = function (oldUser, newUser) {

};
//______________________________________________________________________________________________________________________
//___________________________role_______________________________________________________________________________________
/**ИВЕНТ ПРИ УДАЛЕНИИ РОЛИ
 *
 * @param role - объект роли
 */
exports.disroleDelete = function (role) {

};
/**ИВЕНТ ПРИ СОЗДАНИИ РОЛИ
 *
 * @param role - объект роли
 */
exports.disroleCreate = function (role) {

};
/**ИВЕНТ ПРИ ОБНОВЛЕНИИ РОЛИ
 *
 * @param oldRole - объект старой версии роли
 * @param newRole - объект новой версии роли
 */
exports.disroleUpdate = function (oldRole, newRole) {

};
//______________________________________________________________________________________________________________________
//___________________________discord____________________________________________________________________________________
/**ИНФОРМАЦИИЯ О ДЕБАГЕ ДИСКОРДА
 *
 * @param info - информация
 */
exports.disdebug = function (info) {

};
/**ИВЕНТ ПРИ ДИСКОНЕКТЕ
 *
 * @param info - информация
 */
exports.disdisconnect = function (info) {

};


/**ИВЕНТ ПРИ ОШИБКЕ
 *
 * @param err - объект ошибки
 */
exports.diserror = function (err) {
    console.log(err);
};


/**ИВЕНТ ПРИ ДОСТИЖЕНИИ ЛИМИТА ЗАПРОСОВ
 *
 * @param info
 */
exports.disrateLimit = function (info) {

};
/**ИВЕНТ ПРИ ПЕРЕПОДКЛЮЧЕНИИ
 *
 */
exports.disreconnecting = function () {

};
/**ИВЕНТ ПРИ....
 *
 * @param replayd
 */
exports.disresume = function (replayd) {

};


/**ON WARNING
 *
 * @param info
 */
exports.diswarn = function (info) {

};
//______________________________________________________________________________________________________________________
//______________________________________________________________________________________________________________________