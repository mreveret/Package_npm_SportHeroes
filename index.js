/**
 * Creer une instance de TypeSport
 *
 * @constructor
 * @this {TypeSport}
 * @param {string} sport Le type de sport
 * @param {number} gestion1 une regle de gestion , ici la vitesse max autorisee par exemple
 */
class TypeSport {
	constructor (sport,gestion1) {
		this.sport = sport;
		this.gestion1  =gestion1;
	}
}
/**
 * Creer une instance de TypeSport
 *
 * @constructor
 * @this {Walking}
 * @param {number} gestion1 une regle de gestion , ici la vitesse max autorisee par exemple
 */

class Walking extends TypeSport{
	constructor(gestion1){
		super('walking',116.7);
		if (gestion1 !== undefined)
			this.gestion1 = gestion1;
	}
}
/**
 * Creer une instance de Running
 *
 * @constructor
 * @this {Running}
 * @param {number} gestion1 une regle de gestion , ici la vitesse max autorisee par exemple
 */

class Running extends TypeSport {
	constructor(gestion1){
		super('running',300);
		if (gestion1 !== undefined)
			this.gestion1 = gestion1;
	}
}
/**
 * Creer une instance de TypeSport
 *
 * @constructor
 * @this {Cycling}
 * @param {number} gestion1 une regle de gestion , ici la vitesse max autorisee par exemple
 */

class Cycling extends TypeSport {
	constructor(gestion1){
		super(Cycling, 833,5);
		if (gestion1 !== undefined)
			this.gestion1 = gestion1;
	}
}
/**
 * Creer une instance de NewSport (n'importe quel nouveau sport)
 *
 * @constructor
 * @this {NewSport}
 * @param {number} gestion1 une regle de gestion , ici la vitesse max autorisee par exemple
 */

class NewSport extends TypeSport{
	constructor(sport,gestion1) {
		super(sport,gestion1);
	}
}

var sport = ['walking','running','cycling']; // Array representant les types de sport existant
/**
 * Cree une instance de Activity
 * 
 * @constructor
 * @this {Activity}
 * @param {string} type Le type d'activite
 * @param {number} distance La distance faite durant l'activite en m
 * @param {number} duration La duree de l'activite en min
 * @throws Error un argument est undefined
 */
class Activity {
	static getSportTypes() {
		let ret = 'Type can only be :';
		let i = 0;
		while (i < sport.length)
		{
			if (i === 0)
			ret = ret.concat(' ',sport[i]);
			else
			ret = ret.concat(', ',sport[i]);
			i++;
		}
		ret.concat('','\n');
		return ret;
	}
	constructor(type, distance, duration,gestion1) {
		if (!([type,distance,duration].every(arg => arg !== undefined)))
			throw new Error ('Missing argument\n');
		if (type  === 'running')
			this.type = new Running(gestion1);
		else if (type  === 'walking')
			this.type = new Walking(gestion1);
		else if (type  === 'cycling')
			this.type = new Cycling(gestion1);
		else
			this.type = new NewSport(type, gestion1);
		this.distance = distance;
		this.duration = duration; 
	}
}
/**
 * Cree une instance de Marathon heritant de Activity
 *
 * @constructor
 * @this {Marathon}
 * @param {number} duration La duree de l'activite en min
 * */

class Marathon extends Activity
{
	constructor(duration)
	{
		super('running',42195,duration,250);
	}
};

/**
 * Teste la validitee des attribut d'une instance d'Activity (ou instance de classes heritant d'Activity)
 *
 * @param {Activity} obj Toute instance d'Activity ou d'instance d'objet heritant d'Activity
 * @return {string} Message informant quel attribut est invalide ou si tous les arguments sont valides
 */
function isValid (obj)
{
	if (!(sport.includes(obj.type.sport)))
		return Activity.getSportTypes();
	if (obj.distance < 0)
		return 'Invalid distance\n';
	if (obj.duration < 0)
		return 'Invalid duration\n';
	const speed = obj.distance / obj.duration;
	if (speed > obj.type.gestion1)
		return 'Speed is invalid\n';
	return 'Everything is valid\n';
}



module.exports.isValid = isValid;
module.exports.Activity = Activity;
module.exports.Marathon = Marathon;
module.exports.TypeSport = TypeSport;
module.exports.Running = Running;
module.exports.Walking = Walking;
module.exports.Cycling = Cycling;
module.exports.NewSport = NewSport;
module.exports.sport = sport;
