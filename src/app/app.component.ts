import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter, map } from 'rxjs/operators';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	title = 'football-demo-app';
	environmentName = '';
	environmentUrl = '';

	isOnline: boolean;
	modalVersion: boolean;
	modalPwaEvent: any;
	
	constructor(private swUpdate: SwUpdate) {
		this.environmentName = environment.environmentName;
		this.environmentUrl = environment.apiUrl;

		this.isOnline = false;
		this.modalVersion = false;
	}

	public ngOnInit(): void {
		this.updateOnlineStatus();

		window.addEventListener('online', this.updateOnlineStatus.bind(this));
		window.addEventListener('offline', this.updateOnlineStatus.bind(this));

		if (this.swUpdate.isEnabled) {
			this.swUpdate.versionUpdates.pipe(
				filter((evt: any): evt is VersionReadyEvent => evt.type === 'VERSION_READY'),
				map((evt: any) => {
					console.info(`currentVersion=[${evt.currentVersion} | latestVersion=[${evt.latestVersion}]`);
					this.modalVersion = true;
				}),
			);
		}
	}

	private updateOnlineStatus(): void {
		this.isOnline = window.navigator.onLine;
		console.info(`isOnline=[${this.isOnline}]`);
	}

	public updateVersion(): void {
		this.modalVersion = false;
		window.location.reload();
	}

	public closeVersion(): void {
		this.modalVersion = false;
	}
}
