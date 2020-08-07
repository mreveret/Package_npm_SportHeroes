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
		return 'Type can only be : running, cycling, walking\n';
	}

	constructor(type, distance, duration) {
		if (!([type,distance,duration].every(arg => arg !== undefined)))
			throw new Error ('Missing argument\n');
		this.type = type;
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
		super('running',42195,duration);
		this.duration = duration;
		this.max_speed = 250;
	}
};

/**
 * Defini la vitesse maximale autorisee
 *
 * @param {Activity} obj Toute instance d'Activity ou d'instance d'objet heritant d'Activity (comme Marathon)
 * @return {number} max_speed vitesse maximale autorisee
 */
function defineMaxSpeed(obj)
{
	let max_speed = 0;
	if (obj.max_speed)
		return obj.max_speed
	else
	{
		if (obj.type === 'running')
			max_speed = 300;
		if (obj.type === 'cycling')
			max_speed = 833,4;
		if (obj.type === 'walking')
			max_speed = 116,7;
	}
	return max_speed;
}
/**
 * Teste la validitee des attribut d'une instance d'Activity (ou instance de classes heritant d'Activity)
 *
 * @param {Activity} obj Toute instance d'Activity ou d'instance d'objet heritant d'Activity
 * @return {string} Message informant quel attribut est invalide ou si tous les arguments sont valides
 */
function isValid (obj)
{
	if (obj.type != 'running' && obj.type != 'cycling' && obj.type != 'walking')
		return Activity.getSportTypes();
	if (obj.distance < 0)
		return 'Invalid distance\n';
	if (obj.duration < 0)
		return 'Invalid duration\n';
	const speed = obj.distance / obj.duration;
	const  max_speed = defineMaxSpeed(obj);
	if (speed > max_speed)
		return 'Speed is invalid\n';
	return 'Everything is valid\n';
}

module.exports.defineMaxSpeed = defineMaxSpeed;
module.exports.isValid = isValid;
module.exports.Activity = Activity;
module.exports.Marathon = Marathon;
